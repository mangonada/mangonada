/**
 * coordinate_generator.js
 * 
 * This is the file that contains the logic for generating x and y-values
 * for each commit. The values will be placed on that commit as properties.
 */

/**
 * Given two start and end values, determine if there is any
 * overlap. Expects { start: m, end: n }
 */
function checkOverlap(range1, range2) {
  return (range2.start <= range1.start && range1.start <= range2.end) ||
    (range2.start <= range1.end && range1.end <= range2.end);
}

/**
 * Generate an x-value for each commit. Each commit sent in will
 * have a higher x-value than the one before it.
 */
function generateX(numCommits) {
  return 40 + numCommits * 30;
}

/**
 * Determine if the y-position we're checking will have overlaps. If so,
 * put in a different place. Recursively checks the next y-value if the current
 * one is already taken.
 */
function generateY(branch, branchXCoordinates, takenXCoordinates, y, yOffset) {
  let overlap = false;

  const { start: thisBranchStartPoint, end: thisBranchEndPoint } = branchXCoordinates[branch];

  takenXCoordinates.forEach(set => {
    if(set.y === y) {
      if((set.start <= thisBranchStartPoint && thisBranchStartPoint <= set.end) ||
        (set.start <= thisBranchEndPoint && thisBranchEndPoint <= set.end)) {
        overlap = true;
      }
    }
  });

  if(overlap) {
    return generateY(branch, branchXCoordinates, takenXCoordinates, y + yOffset, yOffset);
  }

  return y;
}

//Edit the y-coordinates for branches that are
//connected but on the same y-value. If there are 2 branches
//connected and on the same line, move one.
function shiftChildrenFromParents(commitsArr, commitsObj, branchYCoordinates, yOffset) {
  let changed = false;
  commitsArr.forEach(commit => {
    commit.children.forEach(child => {
      const childObj = commitsObj[child];
      if(childObj && commit.branch !== childObj.branch) {
        if(branchYCoordinates[commit.branch] === branchYCoordinates[childObj.branch]) {
          branchYCoordinates[childObj.branch] += yOffset;
          changed = true;
        }
      }
    });
  });

  //Recursively call until there are no more changes to be made.
  if(changed) {
    shiftChildrenFromParents(commitsArr, commitsObj, branchYCoordinates, yOffset);
  }
}

/**
 * Given a set of branches and their x and y-coordinate values,
 * fix any overlaps. Recursively call until there are no overlaps. Meant
 * to fix any overlaps created by shiftChildrenFromParents.
 * @param  {Object} xCoordinates - the x-coordinates (start and end) for
 *                               each branch
 * @param  {Object} yCoordinates - the y-coordinate for each branch
 * @param  {Number} yOffset - tells us how far to shift an overlapping branch
 */
function shiftOverlappingBranches(branchXCoordinates, branchYCoordinates, yOffset) {
  const allBranches = Object.keys(branchXCoordinates);
  let altered = false;
  allBranches.forEach(thisBranch => {
    const thisBranchSet = branchXCoordinates[thisBranch];
    allBranches.forEach(branchToCheck => {
      //make sure it's not the same branch
      if(thisBranch !== branchToCheck){
        //make sure they have the same y-coordinate
        if(branchYCoordinates[thisBranch] === branchYCoordinates[branchToCheck]){
          const branchToCheckSet = branchXCoordinates[branchToCheck];

          //Make sure they overlap somewhere along their x-coordinates
          if(thisBranch !== branchToCheck && checkOverlap(thisBranchSet, branchToCheckSet)) {
            branchYCoordinates[branchToCheck] += yOffset;
            altered = true;
          }
        }
      }
    });
  });

  if(altered){
    shiftOverlappingBranches(branchXCoordinates, branchYCoordinates, yOffset);
  }
}

/**
 * Generate the x and y-coordinates for each commit. Place them as properties
 * on the commit.
 */
export default function generateCoordinates(commitsArr, commitsObj, branchObj) {
  const firstCheckForY = 360;
  const yOffset = 40;
  let numCommits = 0;

  /**
   * branchXCoordinates will contain the start and end x-values for
   * each commit.
   * @type {Object}, format:
   *       { branchname1: { start: i, end: j }, branchname2: { start: m, end: n }, ...}
   */
  const branchXCoordinates = {};

  /**
   * branchYCoordinates will the y-coordinate of each branch.
   * @type {Object}, format: { branchname1: n, branchname2: m, ...}
   */
  const branchYCoordinates = { master: 360 };

  //Create the x-value for each commit. Simple and linear.
  commitsArr.forEach(commit => {
    commit.x = generateX(numCommits++);

    //if it's the first time we're processing a commit from this branch, create an object
    if(!branchXCoordinates[commit.branch]) {
      branchXCoordinates[commit.branch] = { start: commit.x };
    }

    branchXCoordinates[commit.branch].end = commit.x;
  });


  /**
   * List the positions that are taken. Properties of each object are
   * a y-value and the range (start and end) of the x-values taken for that
   * y-value. Initialize with a hard-coded master.
   */
  const taken = [{
    y: 360,
    start: branchXCoordinates['master'].start,
    end: branchXCoordinates['master'].end,
  }];

  /**
   * A variable to store the last branch location. Every commit, when being
   * placed, will be compared to the last commit to see if the branch was
   * different. If it was different, the new branch will be placed lower.
   */
  let lastBranch;

  //Create the y-coordinates for each branch. Complex.
  Object.keys(branchObj).forEach(branch => {
    if(!branchXCoordinates[branch] || branch === 'master') return;

    const { start, end } = branchXCoordinates[branch];

    let yToCheck = firstCheckForY;
    if(branch !== lastBranch) {
      yToCheck += yOffset;
    }

    const yCoordinate = generateY(branch, branchXCoordinates, taken, yToCheck, yOffset);
    lastBranch = branch;
    branchYCoordinates[branch] = yCoordinate;
    taken.push({ start, end, y: yCoordinate });
  });

  // if there are 2 branches connected and on the same line, move one
  shiftChildrenFromParents(commitsArr, commitsObj, branchYCoordinates, yOffset);
  shiftOverlappingBranches(branchXCoordinates, branchYCoordinates, yOffset)

  //map the branchYCoordinates values over to their commits
  commitsArr.forEach(commit => commit.y = branchYCoordinates[commit.branch]);
}

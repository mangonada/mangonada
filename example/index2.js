$(function() {

  // const branches = "https://api.github.com/repos/mangonada/mangonada/branches";
  // const commits = "https://api.github.com/repos/mangonada/mangonada/commits";

 $('form').on('submit', function(e){
   e.preventDefault();
   let url = $('#url-input').val();
   url = url.split('/').reverse();
   [repo, user, ...rest] = url;
   $.get(`/api/repos/${user}/${repo}`, function (data){
     [JSONbranches, JSONcommits] = data;
   });
 });

  makeGraph(cytoNodes, cytoEdges);

  function makeGraph(cytoNodes, cytoEdges) {
    const cy_id = document.getElementById('cy');
    const elements = cytoNodes.concat(cytoEdges);

    console.log(elements);
    const data = {
      container: cy_id,
      elements: elements,
      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#666',
            'label': 'data(name)'
          }
        }
      ],
      layout: {
        name: 'preset'
      }
    };

    const cy = cytoscape(data);

    cy.on('tapstart', 'node', { foo: 'start' }, showEvent);
    cy.on('tapend', 'node', { foo: 'end' }, showEvent);
    // cy.on('tapdrag', 'node', { foo: 'drag' }, showEvent);
    cy.on('taphold', 'node', { foo: 'hold' }, showEvent);
    cy.on('tapdragout', 'node', { foo: 'dragout' }, showEvent);
    cy.on('tapdragover', 'node', { foo : 'dragover'}, showEvent);

    cy.on('drag', 'node', { foo : 'drag'}, showEvent);

    function showEvent(evt){
      const node = evt.cyTarget;
      console.log( evt.data.foo, node.id(), node.position() );
    }
  }
});

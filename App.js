
/**
 * <div id="perent">
 *    <div id="child">
 *      <h1>Hello React h1</h>
 *      <h2>Hello React h2</h2>
 *    </div>
 * </div>
 *  Nested demo...
 */

const prent = React.createElement("div",{ id: "perent" },
React.createElement("div", { id: "child" },
React.createElement("h1", {style: {color:"red"}}, "Hello React h1"),
React.createElement("h2", {style: {color:"blue"}}, "Hello React h2")
),
);
//const h1tag = React.createElement("h1",{},"Hello React");

const perentin = ReactDOM.createRoot(document.getElementById("root1"));
//const childins = ReactDOM.createRoot(document.getElementById("child"));


perentin.render(prent);
//------------------------------------------------------------------------------------

/**
 * <div id="perent2">
 *    <div id="child1">
 *      <h1>Hello React h1</h>
 *      <h2>Hello React h2</h2>
 *    </div>
 *  <div id="child2">
 *      <h1>Hello React h1</h>
 *      <h2>Hello React h2</h2>
 *    </div>
 * </div>
 *  Nested demo...
 */

const Parent2 = React.createElement("div",{id:"perent2"},
React.createElement("div",{id:"child1"},
React.createElement("h1",{style:{color:"black"}},"Prent2 h1 tag"),
React.createElement("h2",{style:{color:"green"}},"Prent2 h1 tag")),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{style:{color:"black"}},"Prent3 h1 tag"),
React.createElement("h2",{style:{color:"green"}},"Prent4 h1 tag")]
));

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
//const timeout = setTimeout(() => {
root2.render(Parent2);
//},1000);
// ------------------------------------------------------------------------------------

//Index React.createElement("element,ex:h1" , {attribute},"value")
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
); //h1

console.log(heading.props.children);
//ReactDOM.createRoot(get the id)
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
//root.render(render some value)
root.render(heading);

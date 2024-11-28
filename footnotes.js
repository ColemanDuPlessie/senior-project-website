let footnotediv = document.createElement("div");
let footnotelist = document.createElement("ol");
footnotediv.appendChild(document.createElement("hr"))
footnotediv.appendChild(footnotelist);
footnotediv.setAttribute("id", "footnotes");
document.body.appendChild(footnotediv);

document.querySelectorAll(".footnote").forEach(function(x,i) { 
    let newnode = document.createElement("sup");
    newnode.setAttribute("id", `intextfootnote${i+1}`);

    let link = document.createElement("a");
    link.setAttribute("href", `#footnote${i+1}`);
    link.appendChild(document.createTextNode(i+1));
    newnode.appendChild(link);
    x.parentNode.insertBefore(newnode, x);

    footnote = document.createElement("li");
    footnote.setAttribute("id", `footnote${i+1}`);
    footnote.appendChild(x);

    let backlink = document.createElement("a");
    backlink.setAttribute("class", "footnotebacklink");
    backlink.setAttribute("href", `#intextfootnote${i+1}`);
    backlink.appendChild(document.createTextNode("\u21EA"));
    footnote.appendChild(backlink);

    footnotelist.appendChild(footnote);
})
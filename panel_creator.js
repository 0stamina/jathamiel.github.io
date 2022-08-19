function createPanel(data)
{
    var panel = document.createElement("a");
    panel.className = "panel"
    panel.setAttribute("style","--color: "+data.color+";");
    panel.setAttribute("href", data.link);
    panel.setAttribute("target", "_blank" );
    panel.setAttribute("rel", "noopener noreferrer");


    var background = document.createElement("div")
    background.className = "background";
    background.innerHTML = "<img src = \"projects/"+data.slug+"/cover.png\">";

    var overlay = document.createElement("div");
    overlay.className = "overlay";

    var title = document.createElement("p");
    title.setAttribute("style", "font-weight: bold; font-size: ");
    title.innerHTML = data.name;
    overlay.appendChild(title);
    panel.appendChild(background);
    panel.appendChild(overlay);

    return panel;
}
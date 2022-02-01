function collapseMenu()
{
    //Toggle the class name of the Collapsible Menu buttons
    var allelements=document.getElementById('navigation_bar');
    allelements.classList.toggle("collapsible");

    //Toggle the class name of the Plus Icon
    var allIcons=document.getElementById('icon1');
    allIcons.classList.toggle("hidden");

    //Toggle the class name of the Minus Icon
    var allIcons=document.getElementById('icon2');
    allIcons.classList.toggle("hidden");
}

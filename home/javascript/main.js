function fadeIn(element, callback)
{
    element.style.opacity = 0;
    var tick = function ()
    {
        element.style.opacity = +element.style.opacity + 0.02;
        if (+element.style.opacity < 1)
        {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
        else { callback(); }
    };
    tick();
}

window.onload = function()
{
    fadeIn(document.getElementById("main-header"), function()
    {
        fadeIn(document.getElementById("family-photo"), function()
        {
            fadeIn(document.getElementById("welcome-blurb"));
        });
    });
};

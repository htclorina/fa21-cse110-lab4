for(var i = 0; i < 1; i++)
{
    setInterval(function()
    {
        let d = new Date();
        let time = d.toLocaleTimeString();
        console.log(time);
    }, 1000);
}

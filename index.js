
function makeRegex( pattern )
{
    this.pattern = pattern || "";
}

makeRegex.prototype.make = function ()
{
    try
    {
        return new RegExp( this.pattern, 'g' );
    }
    catch (e)
    {
        return false;
    }
};

module.exports = makeRegex;
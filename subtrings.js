let giggity = 'giggity'

String.prototype.sub_String = function() 
{
  var subset = [];
  for (var i = 0; i < this.length; i++) 
  {
    for (var n = i+1; n<this.length+1; n++) 
    {
      subset.push(this.slice(i,n));
    }
  }
  return subset;
};

console.log("giggity".sub_String());
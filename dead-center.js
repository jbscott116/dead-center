var dcvs = [];


function DeadCenter(el) {
  console.log("Createing Dead Center");
  this.Node = el;
  this.Parent = this.Node.parentNode;
  this.Height = this.Node.offsetHeight;
  this.Offset = calcOffset(this);
  this.Node.style.top = this.Offset + 'px';
  this.Node.style.position = 'absolute';

  function calcOffset(obj) {
    var parentHeight = obj.Parent.offsetHeight;
    var objHeight = obj.Node.offsetHeight;
    console.log("Parent Height -> " + parentHeight);
    console.log("Object Height -> " + objHeight);
    return (parentHeight - objHeight) * 0.25;
  }
}

DeadCenter.prototype.Dump = function() {
  console.log(this);
}

function deadCenter() {
  var dcvEls = document.querySelectorAll('.dc-v, .dcv');
  dcvEls.forEach(function(dcvEl) {
    console.log(dcvEl);
    var newDc = new DeadCenter(dcvEl);
    dcvs.push(newDc);
  });
}

deadCenter();

var dcvs = [];


function DeadCenter(el) {
  console.log("Createing Dead Center");
  this.Node = el;
  this.Parent = this.Node.parentNode;
  this.Height = this.Node.offsetHeight;
  this.Offset = calcOffset(this);
  this.Node.style.top = this.Offset + 'px';
  this.Node.style.position = 'relative';

  function calcOffset(obj) {
    var parentHeight = obj.Parent.offsetHeight;
    var objHeight = obj.Node.offsetHeight;

    // Include margins height
    var style = getComputedStyle(obj.Node);
    var marginTop = parseInt(style.getPropertyValue('margin-top'));
    var marginBottom = parseInt(style.getPropertyValue('margin-bottom'));
    objHeight += marginTop + marginBottom; // Append margin height

    // Return full offset value
    return (parentHeight * 0.5) - (objHeight * 0.5);
  }
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

// Pop out speaker notes

function Popup() {
  this.notes = "Speaker Notes will appear here";
  this.popup = undefined;
}

Popup.prototype.setNotes = function(notes) {
  if (typeof notes === 'undefined') {
    this.notes = "Missing Notes";
  } else {
    this.notes = notes;
  }
  
  if (typeof this.popup != "undefined") {
    this.popup.document.body.innerHTML = '';
    this.popup.document.write(this.notes);
  }
};

Popup.prototype.show = function() {
  if (typeof this.popup === "undefined") {
    this.popup = window.open("", "popupWindow", "width=600, height=300, scrollbars=yes");
  }
  if (this.popup.window === null) {
    this.popup = window.open("", "popupWindow", "width=600, height=300, scrollbars=yes");
  }
  $(this.popup.document.body).html(this.notes);
};

Popup.prototype.hide = function() {
  if (typeof this.popup != "undefined") {
    this.popup.close();
  }
};
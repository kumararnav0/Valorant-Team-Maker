function updateSublists() {
    var mainDropdown = document.getElementById('mainDropdown').value;
    // Hide all sublists
    document.querySelectorAll('.sublist').forEach(function(sublist) {
      sublist.style.display = 'none';
    });
    
    // Show the selected sublist
    if(mainDropdown) {
      document.getElementById(mainDropdown + 'Sublist').style.display = 'block';
    }
  }
  
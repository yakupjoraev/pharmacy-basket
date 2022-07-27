function selected() {
	var container = document.querySelector('.map-list__inner')

	if (!container) {
		return null
	}

  var radioInput = container.querySelectorAll('.map-list__input')
  var selectedMapList = container.querySelectorAll('.map-list__switcher')

  radioInput.forEach((element) => {
    element.addEventListener('click', function(event){
      var inputAttr = element.getAttribute('value');
      selectedMapList.forEach((maplist) => {
        var maplistAtrr = maplist.getAttribute('value');
        if (maplistAtrr !== inputAttr) {
          maplist.classList.remove('radio-checked')
        }
        else {
          maplist.classList.add('radio-checked')
        }
      });
    })
    
  });


}

selected()

let selectedItem = null;

const draggables = document.querySelectorAll('.draggable');
const zones = document.querySelectorAll('.drop-zone');
const resetBtn = document.getElementById('reset-btn');
const dock = document.getElementById('items-dock');

// 1. Выбор предмета
draggables.forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Снимаем выделение с другого предмета
        if (selectedItem) {
            selectedItem.classList.remove('selected');
        }
        
        // Выделяем текущий
        selectedItem = item;
        item.classList.add('selected');
    });
});

// 2. Выбор зоны для перемещения
zones.forEach(zone => {
    zone.addEventListener('click', () => {
        if (selectedItem) {
            zone.appendChild(selectedItem);
            selectedItem.classList.remove('selected');
            selectedItem = null;
        }
    });
});

// Возврат в док кликом по пустой области дока
dock.addEventListener('click', (e) => {
    if (selectedItem && e.target === dock) {
        dock.appendChild(selectedItem);
        selectedItem.classList.remove('selected');
        selectedItem = null;
    }
});

// Кнопка полного сброса
resetBtn.addEventListener('click', () => {
    draggables.forEach(item => {
        item.classList.remove('selected');
        dock.appendChild(item);
    });
    selectedItem = null;
});
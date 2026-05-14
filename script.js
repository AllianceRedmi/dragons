// Данные о драконах
const dragons = [
    {
        id: 1,
        name: "Игнис",
        type: "fire",
        typeName: "Огненный дракон",
        emoji: "🔥",
        description: "Игнис — повелитель пламени, рожденный в жерле вулкана. Его чешуя пылает как раскаленная лава, а дыхание способно расплавить даже самую прочную сталь. Легенды гласят, что он охраняет древние сокровища затерянной цивилизации.",
        stats: {
            strength: 95,
            speed: 70,
            intelligence: 80,
            magic: 90
        }
    },
    {
        id: 2,
        name: "Гляциус",
        type: "ice",
        typeName: "Ледяной дракон",
        emoji: "❄️",
        description: "Гляциус родился в вечных льдах северных пустошей. Его ледяное дыхание может заморозить целую армию за мгновение. Говорят, что его сердце — это древний магический кристалл, дарующий ему бессмертие.",
        stats: {
            strength: 85,
            speed: 75,
            intelligence: 85,
            magic: 95
        }
    },
    {
        id: 3,
        name: "Фульгур",
        type: "storm",
        typeName: "Грозовой дракон",
        emoji: "⚡",
        description: "Фульгур — воплощение грозы и молнии. Он парит среди облаков, вызывая бури одним взмахом крыльев. Его глаза сверкают как молнии, а рёв звучит подобно грому.",
        stats: {
            strength: 80,
            speed: 95,
            intelligence: 75,
            magic: 85
        }
    },
    {
        id: 4,
        name: "Драконис Древний",
        type: "ancient",
        typeName: "Древний дракон",
        emoji: "👑",
        description: "Драконис — один из первых драконов, появившихся в мире. Ему тысячи лет, и он хранит знания забытых эпох. Его мудрость безгранична, а сила превосходит всех современных драконов.",
        stats: {
            strength: 100,
            speed: 60,
            intelligence: 100,
            magic: 100
        }
    },
    {
        id: 5,
        name: "Пирокс",
        type: "fire",
        typeName: "Огненный дракон",
        emoji: "🌋",
        description: "Молодой огненный дракон, обучающийся контролировать свою силу. Несмотря на юный возраст, Пирокс уже способен создавать огненные штормы невероятной мощности.",
        stats: {
            strength: 70,
            speed: 85,
            intelligence: 65,
            magic: 75
        }
    },
    {
        id: 6,
        name: "Крио",
        type: "ice",
        typeName: "Ледяной дракон",
        emoji: "🧊",
        description: "Крио — страж ледяных пещер. Она создает великолепные ледяные скульптуры своим дыханием и защищает кристальные сокровища своего подземного царства.",
        stats: {
            strength: 75,
            speed: 80,
            intelligence: 90,
            magic: 85
        }
    },
    {
        id: 7,
        name: "Темпест",
        type: "storm",
        typeName: "Грозовой дракон",
        emoji: "🌩️",
        description: "Темпест — быстрейший из грозовых драконов. Он может облететь весь мир за один день, оставляя за собой след из молний и бурь.",
        stats: {
            strength: 75,
            speed: 100,
            intelligence: 70,
            magic: 80
        }
    },
    {
        id: 8,
        name: "Аурелиус",
        type: "ancient",
        typeName: "Древний дракон",
        emoji: "✨",
        description: "Аурелиус — хранитель баланса мира. Он наблюдал за рождением и падением countless цивилизаций. Его золотая чешуя сияет светом тысяч звёзд.",
        stats: {
            strength: 95,
            speed: 65,
            intelligence: 95,
            magic: 95
        }
    }
];

// DOM элементы
const dragonGallery = document.getElementById('dragonGallery');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('dragonModal');
const closeBtn = document.querySelector('.close-btn');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const modalStats = document.getElementById('modalStats');

// Функция создания карточки дракона
function createDragonCard(dragon) {
    const card = document.createElement('div');
    card.className = 'dragon-card';
    card.dataset.type = dragon.type;
    
    card.innerHTML = `
        <div class="dragon-image">${dragon.emoji}</div>
        <div class="dragon-info">
            <h3 class="dragon-name">${dragon.name}</h3>
            <p class="dragon-type">${dragon.typeName}</p>
            <p class="dragon-preview">${dragon.description.substring(0, 100)}...</p>
        </div>
    `;
    
    card.addEventListener('click', () => openModal(dragon));
    return card;
}

// Функция отображения драконов
function displayDragons(filter = 'all') {
    dragonGallery.innerHTML = '';
    
    const filteredDragons = filter === 'all' 
        ? dragons 
        : dragons.filter(dragon => dragon.type === filter);
    
    filteredDragons.forEach(dragon => {
        const card = createDragonCard(dragon);
        dragonGallery.appendChild(card);
    });
}

// Функция открытия модального окна
function openModal(dragon) {
    modalTitle.textContent = dragon.name;
    modalImage.textContent = dragon.emoji;
    modalDescription.textContent = dragon.description;
    
    modalStats.innerHTML = `
        <div class="stat-item">
            <div class="stat-label">Сила</div>
            <div class="stat-value">${dragon.stats.strength}</div>
        </div>
        <div class="stat-item">
            <div class="stat-label">Скорость</div>
            <div class="stat-value">${dragon.stats.speed}</div>
        </div>
        <div class="stat-item">
            <div class="stat-label">Интеллект</div>
            <div class="stat-value">${dragon.stats.intelligence}</div>
        </div>
        <div class="stat-item">
            <div class="stat-label">Магия</div>
            <div class="stat-value">${dragon.stats.magic}</div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Функция закрытия модального окна
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Обработчики событий
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        displayDragons(btn.dataset.filter);
    });
});

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Инициализация
displayDragons();

console.log('🐉 Мир Драконов загружен!');

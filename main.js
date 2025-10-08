const state = {
  currentFilter: 'time',
  pokemonData: [],
  searchTerm: '',
  filteredData: []
};

const timeOrder = ['amanecer', 'mañana', 'dia', 'tarde', 'atardecer', 'noche'];
const biomeTranslations = {
  'plains': 'Plains',
  'sunflower_plains': 'Sunflower Plains',
  'desert': 'Desert',
  'desert_hills': 'Desert Hills',
  'desert_lakes': 'Desert Lakes',
  'badlands': 'Badlands',
  'modified_badlands_plateau': 'Modified Badlands Plateau',
  'badlands_plateau': 'Badlands Plateau',
  'modified_wooded_badlands_plateau': 'Modified Wooded Badlands Plateau',
  'wooded_badlands_plateau': 'Wooded Badlands Plateau',
  'eroded_badlands': 'Eroded Badlands',
  'modified_jungle': 'Modified Jungle',
  'modified_jungle_edge': 'Modified Jungle Edge',
  'savanna': 'Savanna',
  'savanna_plateau': 'Savanna Plateau',
  'shattered_savanna': 'Shattered Savanna',
  'shattered_savanna_plateau': 'Shattered Savanna Plateau',
  'taiga': 'Taiga',
  'taiga_hills': 'Taiga Hills',
  'taiga_mountains': 'Taiga Mountains',
  'forest': 'Forest',
  'wooded_hills': 'Wooded Hills',
  'flower_forest': 'Flower Forest',
  'swamp': 'Swamp',
  'swamp_hills': 'Swamp Hills',
  'ocean': 'Ocean',
  'warm_ocean': 'Warm Ocean',
  'lukewarm_ocean': 'Lukewarm Ocean',
  'cold_ocean': 'Cold Ocean',
  'frozen_ocean': 'Frozen Ocean',
  'deep_ocean': 'Deep Ocean',
  'deep_warm_ocean': 'Deep Warm Ocean',
  'deep_lukewarm_ocean': 'Deep Lukewarm Ocean',
  'deep_cold_ocean': 'Deep Cold Ocean',
  'deep_frozen_ocean': 'Deep Frozen Ocean',
  'beach': 'Beach',
  'snowy_beach': 'Snowy Beach',
  'stone_shore': 'Stone Shore',
  'mushroom_field_shore': 'Mushroom Field Shore',
  'river': 'River',
  'frozen_river': 'Frozen River',
  'mountains': 'Mountains',
  'mountain_edge': 'Mountain Edge',
  'gravelly_mountains': 'Gravelly Mountains',
  'modified_gravelly_mountains': 'Modified Gravelly Mountains',
  'wooded_mountains': 'Wooded Mountains',
  'snowy_mountains': 'Snowy Mountains',
  'snowy_tundra': 'Snowy Tundra',
  'ice_spikes': 'Ice Spikes',
  'snowy_taiga': 'Snowy Taiga',
  'snowy_taiga_hills': 'Snowy Taiga Hills',
  'snowy_taiga_mountains': 'Snowy Taiga Mountains',
  'mushroom_fields': 'Mushroom Fields',
  'jungle': 'Jungle',
  'jungle_edge': 'Jungle Edge',
  'jungle_hills': 'Jungle Hills',
  'bamboo_jungle': 'Bamboo Jungle',
  'bamboo_jungle_hills': 'Bamboo Jungle Hills',
  'dark_forest': 'Dark Forest',
  'dark_forest_hills': 'Dark Forest Hills',
  'birch_forest': 'Birch Forest',
  'birch_forest_hills': 'Birch Forest Hills',
  'tall_birch_forest': 'Tall Birch Forest',
  'tall_birch_hills': 'Tall Birch Hills',
  'giant_tree_taiga': 'Giant Tree Taiga',
  'giant_tree_taiga_hills': 'Giant Tree Taiga Hills',
  'giant_spruce_taiga': 'Giant Spruce Taiga',
  'giant_spruce_taiga_hills': 'Giant Spruce Taiga Hills',
  'mount_lanakila': 'Mount Lanakila'
};

const timeTranslations = {
  'amanecer': 'Dawn',
  'mañana': 'Morning',
  'dia': 'Day',
  'tarde': 'Afternoon',
  'atardecer': 'Dusk',
  'noche': 'Night'
};

function init() {
  state.pokemonData = pokemonData;
  state.filteredData = pokemonData;
  setupEventListeners();
  renderNavigation();
  renderTables();
}

function setupEventListeners() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      const filter = e.currentTarget.dataset.filter;
      if (filter !== state.currentFilter) {
        state.currentFilter = filter;
        filterButtons.forEach(function(b) {
          b.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
        renderNavigation();
        renderTables();
      }
    });
  });

  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', function(e) {
    state.searchTerm = e.target.value.toLowerCase().trim();
    handleSearch();
  });

  const mobileToggle = document.createElement('button');
  mobileToggle.className = 'mobile-toggle';
  mobileToggle.innerHTML = '<span class="material-symbols-outlined">menu</span>';
  mobileToggle.addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('mobile-open');
  });
  document.body.prepend(mobileToggle);
}

function handleSearch() {
  if (!state.searchTerm) {
    state.filteredData = state.pokemonData;
    renderTables();
    return;
  }

  state.filteredData = state.pokemonData.filter(function(p) {
    return p.name.toLowerCase().includes(state.searchTerm);
  });

  renderTables();

  if (state.filteredData.length === 1) {
    const found = state.filteredData[0];
    setTimeout(function() {
      const times = Array.isArray(found.time) ? found.time : [found.time];
      const firstTime = times[0];
      const sectionId = state.currentFilter === 'time'
        ? 'time-' + firstTime
        : 'biome-' + (Array.isArray(found.biome) ? found.biome[0] : found.biome);

      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }
}

function renderNavigation() {
  const navContainer = document.getElementById('nav-links');
  navContainer.innerHTML = '';

  if (state.currentFilter === 'time') {
    timeOrder.forEach(function(time) {
      const link = document.createElement('div');
      link.className = 'nav-link';
      link.textContent = timeTranslations[time];
      link.addEventListener('click', function() {
        const section = document.getElementById('time-' + time);
        if (section) {
          section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
      navContainer.appendChild(link);
    });
  } else {
    const uniqueBiomes = [];
    state.filteredData.forEach(function(p) {
      const biomes = Array.isArray(p.biome) ? p.biome : [p.biome];
      biomes.forEach(function(biome) {
        if (biome && uniqueBiomes.indexOf(biome) === -1) {
          uniqueBiomes.push(biome);
        }
      });
    });

    const biomes = uniqueBiomes.sort(function(a, b) {
      const nameA = biomeTranslations[a] || a;
      const nameB = biomeTranslations[b] || b;
      return nameA.localeCompare(nameB, 'es');
    });

    biomes.forEach(function(biome) {
      const link = document.createElement('div');
      link.className = 'nav-link';
      link.textContent = biomeTranslations[biome] || biome;
      link.addEventListener('click', function() {
        const section = document.getElementById('biome-' + biome);
        if (section) {
          section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
      navContainer.appendChild(link);
    });
  }
}

function formatBiomes(biome) {
  if (!biome) return '';
  
  const biomes = Array.isArray(biome) ? biome : [biome];
  const validBiomes = biomes.filter(function(b) { return b; });
  
  if (validBiomes.length === 0) return '';
  
  const translatedBiomes = validBiomes.map(function(b) { 
    return biomeTranslations[b] || b; 
  });
  
  if (translatedBiomes.length <= 3) {
    return translatedBiomes.join(', ');
  }
  
  const visible = translatedBiomes.slice(0, 3).join(', ');
  const hidden = translatedBiomes.slice(3).join(', ');
  const count = translatedBiomes.length - 3;
  
  return '<span class="info-visible">' + visible + '</span><span class="info-expandable"> <span class="expand-trigger">+' + count + ' más</span><span class="info-hidden">, ' + hidden + '</span></span>';
}

function formatTimes(time) {
  if (!time) return '';
  
  const times = Array.isArray(time) ? time : [time];
  const validTimes = times.filter(function(t) { return t; });
  
  if (validTimes.length === 0) return '';
  
  const translatedTimes = validTimes.map(function(t) { 
    return timeTranslations[t] || t; 
  });
  
  if (translatedTimes.length <= 3) {
    return translatedTimes.join(', ');
  }
  
  const visible = translatedTimes.slice(0, 3).join(', ');
  const hidden = translatedTimes.slice(3).join(', ');
  const count = translatedTimes.length - 3;
  
  return '<span class="info-visible">' + visible + '</span><span class="info-expandable"> <span class="expand-trigger">+' + count + ' más</span><span class="info-hidden">, ' + hidden + '</span></span>';
}

function renderTables() {
  const container = document.getElementById('tables-container');
  container.innerHTML = '';

  if (state.filteredData.length === 0) {
    container.innerHTML = '<div class="empty-state"><span class="material-symbols-outlined">search_off</span><p>No se encontraron Pokémon con ese nombre</p></div>';
    return;
  }

  if (state.currentFilter === 'time') {
    renderTimeBasedTables(container);
  } else {
    renderBiomeBasedTables(container);
  }
  
  setTimeout(function() {
    const triggers = document.querySelectorAll('.expand-trigger');
    triggers.forEach(function(trigger) {
      trigger.addEventListener('click', function(e) {
        e.stopPropagation();
        const expandable = this.parentElement;
        expandable.classList.toggle('expanded');
      });
    });
  }, 100);
}

function renderTimeBasedTables(container) {
  timeOrder.forEach(function(time) {
    const pokemonInTime = state.filteredData.filter(function(p) {
      const times = Array.isArray(p.time) ? p.time : [p.time];
      return times.indexOf(time) !== -1;
    });
    if (pokemonInTime.length > 0) {
      const section = document.createElement('div');
      section.className = 'table-section';
      section.id = 'time-' + time;

      const title = document.createElement('h2');
      title.className = 'table-title';
      title.textContent = timeTranslations[time];
      section.appendChild(title);

      const table = document.createElement('div');
      table.className = 'pokemon-table';

      const header = document.createElement('div');
      header.className = 'table-header';
      header.innerHTML = '<div class="header-cell"></div><div class="header-cell">Pokémon</div><div class="header-cell">Bioma</div><div class="header-cell">Condición</div>';
      table.appendChild(header);

      pokemonInTime.forEach(function(pokemon) {
        const row = document.createElement('div');
        row.className = 'table-row';
        row.innerHTML = '<div class="pokemon-sprite"><img src="' + pokemon.sprite + '" alt="' + pokemon.name + '" loading="lazy" /></div><div class="pokemon-name">' + pokemon.name + '</div><div class="pokemon-info">' + formatBiomes(pokemon.biome) + '</div><div class="pokemon-condition">' + (pokemon.condition || '') + '</div>';
        table.appendChild(row);
      });

      section.appendChild(table);
      container.appendChild(section);
    }
  });
}

function renderBiomeBasedTables(container) {
  const uniqueBiomes = [];
  state.filteredData.forEach(function(p) {
    const biomes = Array.isArray(p.biome) ? p.biome : [p.biome];
    biomes.forEach(function(biome) {
      if (biome && uniqueBiomes.indexOf(biome) === -1) {
        uniqueBiomes.push(biome);
      }
    });
  });

  const biomes = uniqueBiomes.sort(function(a, b) {
    const nameA = biomeTranslations[a] || a;
    const nameB = biomeTranslations[b] || b;
    return nameA.localeCompare(nameB, 'es');
  });

  biomes.forEach(function(biome) {
    const pokemonInBiome = state.filteredData.filter(function(p) {
      const pBiomes = Array.isArray(p.biome) ? p.biome : [p.biome];
      return pBiomes.indexOf(biome) !== -1;
    });

    const section = document.createElement('div');
    section.className = 'table-section';
    section.id = 'biome-' + biome;

    const title = document.createElement('h2');
    title.className = 'table-title';
    title.textContent = biomeTranslations[biome] || biome;
    section.appendChild(title);

    const table = document.createElement('div');
    table.className = 'pokemon-table';

    const header = document.createElement('div');
    header.className = 'table-header';
    header.innerHTML = '<div class="header-cell"></div><div class="header-cell">Pokémon</div><div class="header-cell">Tiempo</div><div class="header-cell">Condición</div>';
    table.appendChild(header);

    pokemonInBiome.forEach(function(pokemon) {
      const row = document.createElement('div');
      row.className = 'table-row';
      row.innerHTML = '<div class="pokemon-sprite"><img src="' + pokemon.sprite + '" alt="' + pokemon.name + '" loading="lazy" /></div><div class="pokemon-name">' + pokemon.name + '</div><div class="pokemon-info">' + formatTimes(pokemon.time) + '</div><div class="pokemon-condition">' + (pokemon.condition || '') + '</div>';
      table.appendChild(row);
    });
    section.appendChild(table);
    container.appendChild(section);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
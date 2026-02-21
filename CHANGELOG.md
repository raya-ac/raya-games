# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.4.0] - 2026-02-21

### Added
- **Gravity Sandbox** - Interactive N-body gravity simulation. Spawn stars, planets, black holes and watch orbital mechanics unfold in real-time. Features collision detection, trail visualization, and presets (Solar System, Binary Stars, Chaos).
- **Starfield Explorer** - 3D infinite procedural starfield exploration. Pilot your ship through space, engage warp drive with spacebar, explore nebulae, and track light-years traveled.
- **Space Mining Tycoon** - Idle/tycoon game where you build a mining empire. Extract iron, gold, crystals, uranium and exotics from asteroids. Upgrade equipment, buy automated drones, and become the richest corporation in the galaxy.

### Fixed
- build.js: Fixed typo `child_sync` -> `child_process`

### Changed
- Total games: 44
- Updated package.json with new "space" category

## [1.2.1] - 2026-02-18

### Enhanced
- life-simulator: Ambient music, achievement sounds, visual polish
- life2d: Electronic ambient + birth/death particle sounds
- boids: Refined nature flocking music
- gol4d: Ethereal 4D ambient music
- medieval-wars: Epic orchestral + detailed battle sounds
- particles: Space ambient refinements
- snake-ai: Retro arcade music + movement sounds
- zombie-sim: Horror ambient + zombie sounds
- games.html: Portal ambient music

## [1.2.0] - 2026-02-18

### Enhanced
- ai-office: Lofi office ambience + coworker sounds
- ant-sim: Nature ambient + pheromone audio feedback
- battleroyale: Action/tension music + combat sounds
- boids: Peaceful flocking music + wing sounds
- disease-sim: Ominous outbreak ambience + alarm sounds
- ecosystem: Forest/nature ambient + animal sounds
- falling-sand: Particle ambient + element reaction sounds
- fluid-sim: Flowing water sounds + splash effects
- gol3d: Space ambient + cell evolution sounds
- life2d: Electronic ambient + visual glow enhancements
- maze: Dungeon ambient + footstep/solve sounds
- medieval-wars: Epic orchestral with detailed battle sounds
- neural-net: Cyberpunk synthwave + training sounds
- particles: Space ambient + collision sounds
- prison-tycoon: Industrial ambience + alarm/riot sounds
- traffic: City ambient + car/horn sounds

### Added for all games
- Web Audio API procedural music generation (no external files)
- Themed sound effects for interactions
- Music toggle button with visual feedback
- Keyboard shortcuts: M=mute/unmute, Space=pause
- Enhanced visual effects and animations

## [1.1.0] - 2026-02-18

### Added
- **Falling Sand** - Physics sandbox with 12+ elements (sand, water, fire, acid, lava, etc.)
- **Snake AI** - Watch BFS, A*, and Hamiltonian algorithms play Snake
- **Maze Generator** - 4 generation algorithms + 4 solvers with visualization
- Total games now 24

## [1.0.0] - 2026-02-18

### Added
- Initial release of Raya Games collection
- 21 browser-based games and simulations
- Self-contained HTML files with inline CSS/JS
- Featured: Life Simulator with career system, relationships, crime
- Cellular Automata: Life 2D, Game of Life 3D, Game of Life 4D
- Simulations: Ecosystem, Fluid Dynamics, Boids, Particles, Ant Colony
- Tycoon: Prison Empire, Stock Market, City Builder, Space Colony
- Strategy: Medieval Kingdom Wars, Battle Royale, Disease Simulator, Zombie Outbreak
- AI/ML: Neural Network Visualizer, AI Office
- Utility: Traffic Simulator
- Automated release workflow via GitHub Actions

### Games Included
- `life-simulator.html` - Complete life simulation with persistence
- `life2d.html` - Conway's Game of Life
- `gol3d.html` - 3D cellular automaton
- `gol4d.html` - 4D hypercube evolution
- `ecosystem.html` - Evolution and predator-prey dynamics
- `fluid-sim.html` - Real-time fluid physics
- `boids.html` - Swarm intelligence simulation
- `particles.html` - Interactive particle physics
- `ant-sim.html` - Ant colony emergent behavior
- `prison-tycoon.html` - Prison management simulation
- `stock-tycoon.html` - Stock trading simulation
- `city-builder.html` - City building with traffic
- `space-colony.html` - Mars colony management
- `medieval-wars.html` - Hex-based strategy game
- `battleroyale.html` - 100 AI battle royale
- `disease-sim.html` - Disease outbreak simulator
- `zombie-sim.html` - Zombie outbreak simulator
- `falling-sand.html` - Physics sandbox with elements
- `snake-ai.html` - AI pathfinding Snake
- `maze.html` - Maze generator and solver
- `neural-net.html` - Neural network visualizer
- `ai-office.html` - AI agent office simulator
- `traffic.html` - Traffic simulation
- `games.html` - Games portal page

[1.0.0]: https://github.com/raya-ac/raya-games/releases/tag/v1.0.0

# 🎮 Raya Games

A collection of browser-based games and simulations. No downloads required - play instantly in your browser!

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Games](https://img.shields.io/badge/games-20-green.svg)
![License](https://img.shields.io/badge/license-MIT-yellow.svg)

## 🚀 Quick Start

Visit [https://raya.li/games](https://raya.li/games) to play instantly, or open any HTML file directly in your browser.

## 🎮 Games Collection

### ⭐ Featured
| Game | Description |
|------|-------------|
| **Life Simulator** | The ultimate life simulation with careers, relationships, crime system, and persistence |

### 🔲 Cellular Automata
| Game | Description |
|------|-------------|
| **Life 2D** | Classic Conway's Game of Life with custom rules |
| **Game of Life 3D** | Cellular automaton in 3D voxel space |
| **Game of Life 4D** | Hypercube evolution in four dimensions |

### 🌍 Simulations
| Game | Description |
|------|-------------|
| **Ecosystem Simulator** | Predator-prey dynamics with evolution and genetics |
| **Fluid Dynamics** | Navier-Stokes fluid simulation with color mixing |
| **Boids Flocking** | Swarm intelligence with separation, alignment, cohesion |
| **Particle System** | Interactive physics playground with forces |
| **Ant Colony** | Emergent behavior with pheromone trails |

### 🏢 Tycoon/Management
| Game | Description |
|------|-------------|
| **Prison Empire** | Build and manage a prison facility |
| **Stock Market Tycoon** | Real-time trading with margin and short selling |
| **City Builder** | Zoning, traffic, power, water management |
| **Space Colony** | Mars/base colony with life support systems |

### ⚔️ Strategy
| Game | Description |
|------|-------------|
| **Medieval Kingdom Wars** | Hex-based strategy with diplomacy |
| **Battle Royale** | 100 AI agents fight to survive |
| **Disease Simulator** | Plague Inc-style outbreak evolution |

### 🧠 AI/ML
| Game | Description |
|------|-------------|
| **Neural Network Visualizer** | Interactive AI training visualization |
| **AI Office** | Manage 18 AI agents with RPG stats |

### 🚗 Utility
| Game | Description |
|------|-------------|
| **Traffic Simulator** | Road networks with AI vehicles |

## 📁 Repository Structure

```
raya-games/
├── games.html              # Main portal page
├── life-simulator.html     # Featured: Life simulation
├── life2d.html            # Conway's Game of Life
├── gol3d.html             # 3D cellular automaton
├── gol4d.html             # 4D cellular automaton
├── ecosystem.html         # Ecosystem simulation
├── fluid-sim.html         # Fluid dynamics
├── boids.html             # Flocking behavior
├── particles.html         # Particle physics
├── ant-sim.html           # Ant colony
├── prison-tycoon.html     # Prison management
├── stock-tycoon.html      # Stock trading
├── city-builder.html      # City building
├── space-colony.html      # Space colony sim
├── medieval-wars.html     # Medieval strategy
├── battleroyale.html      # Battle royale
├── disease-sim.html       # Disease outbreak
├── neural-net.html        # Neural network viz
├── ai-office.html         # AI office sim
├── traffic.html           # Traffic simulation
├── package.json           # Package metadata
├── VERSION               # Current version
├── CHANGELOG.md          # Version history
└── .github/
    └── workflows/
        └── release.yml    # Automated releases
```

## 🏷️ Versioning

This project follows [Semantic Versioning](https://semver.org/):

- **MAJOR**: Breaking changes, new game engine
- **MINOR**: New games, significant features
- **PATCH**: Bug fixes, performance improvements

## 🔄 Release Process

1. Update `VERSION` file
2. Update `CHANGELOG.md`
3. Update version in `package.json`
4. Commit: `git commit -m "Release v1.x.x"`
5. Tag: `git tag -a v1.x.x -m "Version 1.x.x"`
6. Push: `git push origin main --tags`
7. GitHub Actions automatically creates release

## 🛠️ Development

All games are self-contained HTML files with inline CSS and JavaScript. No build step required.

### Adding a New Game

1. Create `your-game.html` in root directory
2. Add entry to `package.json` games section
3. Update this README
4. Update `games.html` portal

## 📜 License

MIT License - feel free to use, modify, and distribute.

## 🔗 Links

- [Play Online](https://raya.li/games)
- [Main Repository](https://github.com/raya-ac/raya-monitor)
- [Issue Tracker](https://github.com/raya-ac/raya-games/issues)

---

Made with ❤️ by raya

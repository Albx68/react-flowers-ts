# react-flowers-ts Documentation

A simple React component library in TypeScript for drawing beautiful flower patterns

## Steps to install

npm i react-flowers-ts

## Description

Component library to draw customizable flower patterns and designs

## Example Usage

````

## Configuration Options

### Flower Properties

| Property | Type | Description | Example Values |
|----------|------|-------------|----------------|
| `size` | number | Overall size of the flower in pixels | `200` |
| `petalCount` | number | Number of petals in the flower | `8`, `12`, `16` |
| `petalColor` | string | Color of the petals (hex, rgb, or color name) | `"#FF69B4"`, `"pink"` |
| `baseColor` | string | Color of the flower center (hex, rgb, or color name) | `"#FFD700"`, `"yellow"` |
| `petalType` | string | Shape style of the petals | See petal types below |
| `baseRadiusFactor` | number | Size of the center relative to overall size (0-1) | `0.15`, `0.2` |

### Available Petal Types

The library includes a variety of petal shapes to create different flower styles:

#### Natural Flowers
- `"rose"` - Classic rose petal shape
- `"sunflower"` - Elongated petals typical of sunflowers
- `"daisy"` - Simple, pointed daisy petals
- `"tulip"` - Rounded tulip-style petals
- `"lily"` - Elegant lily petal shape
- `"orchid"` - Delicate orchid-inspired petals
- `"lotus"` - Traditional lotus petal design
- `"cherryBlossom"` - Delicate cherry blossom shape
- `"bluebell"` - Bell-shaped flower petals
- `"marigold"` - Round marigold petals

#### Geometric Shapes
- `"heart"` - Heart-shaped petals
- `"heartFlipped"` - Inverted heart shape
- `"ellipse"` - Oval-shaped petals
- `"teardrop"` - Teardrop-shaped petals
- `"spade"` - Spade-shaped petals
- `"triangle"` - Triangle-shaped petals
- `"flame"` - Flame-like petal design
- `"diamond"` - Diamond-shaped petals
- `"rounded"` - Simple rounded petals

## Examples

```tsx
import { Flower } from 'react-flowers-ts';

// Basic Rose Example
const RoseExample = () => (
  <Flower
    size={200}
    petalCount={12}
    petalColor="#FF69B4"
    baseColor="#FFD700"
    petalType="rose"
    baseRadiusFactor={0.15}
  />
);

// Sunflower Example
const SunflowerExample = () => (
  <Flower
    size={300}
    petalCount={24}
    petalColor="#FFD700"  // Golden petals
    baseColor="#654321"   // Brown center
    petalType="sunflower"
    baseRadiusFactor={0.2}
  />
);

// Daisy Example
const DaisyExample = () => (
  <Flower
    size={150}
    petalCount={10}
    petalColor="#FFFFFF"  // White petals
    baseColor="#FFD700"   // Yellow center
    petalType="daisy"
    baseRadiusFactor={0.18}
  />
);

// Multiple Flowers in a Pattern
const FlowerPattern = () => (
  <div style={{ display: 'flex', gap: '20px' }}>
    <Flower
      size={100}
      petalCount={8}
      petalColor="#E6E6FA"  // Lavender
      baseColor="#9370DB"   // Medium purple
      petalType="lotus"
      baseRadiusFactor={0.15}
    />
    <Flower
      size={150}
      petalCount={12}
      petalColor="#FF69B4"  // Hot pink
      baseColor="#FFD700"   // Gold
      petalType="rose"
      baseRadiusFactor={0.15}
    />
    <Flower
      size={125}
      petalCount={6}
      petalColor="#98FB98"  // Pale green
      baseColor="#228B22"   // Forest green
      petalType="tulip"
      baseRadiusFactor={0.12}
    />
  </div>
);
````

## Tips for Creating Beautiful Flowers

1. **Petal Count**:

   - Use even numbers for symmetrical flowers
   - 8-12 petals work well for most natural flowers
   - 20+ petals create fuller, more dramatic flowers

2. **Size and Proportions**:

   - Larger sizes (200+) show more detail
   - `baseRadiusFactor` between 0.15-0.2 works well for most flowers
   - Adjust based on petal type and desired look

3. **Color Combinations**:
   - Use complementary colors for petals and base
   - Consider using lighter shades for petals and darker for the base
   - Natural flower colors tend to work best with natural petal shapes

## License

MIT License

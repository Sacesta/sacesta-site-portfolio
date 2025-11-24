import { motion } from 'framer-motion';
import { useState } from 'react';

interface PortfolioItem {
    id: number;
    title: string;
    description: string;
    image: string;
}

interface ChromaGridProps {
    items: PortfolioItem[];
}

export default function ChromaGrid({ items }: ChromaGridProps) {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const gradients = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    ];

    return (
        <div className="chroma-grid">
            {items.map((item, index) => (
                <motion.div
                    key={item.id}
                    className="chroma-grid-item"
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <div
                        className="chroma-grid-border"
                        style={{ background: gradients[index % gradients.length] }}
                    >
                        <motion.div
                            className="chroma-grid-content"
                            whileHover={{ scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div
                                className="chroma-grid-image"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />
                            <motion.div
                                className="chroma-grid-overlay"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="chroma-grid-title">{item.title}</h3>
                                <p className="chroma-grid-description">{item.description}</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

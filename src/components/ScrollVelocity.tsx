import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
    wrap
} from "framer-motion";

interface ParallaxProps {
    children: string;
    baseVelocity: number;
    className?: string;
}

function ParallaxText({ children, baseVelocity = 100, className = "" }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((_, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    /**
     * The number of times to repeat the child text should be dynamic based on
     * the size of the text and viewport. For now, using a fixed number.
     */
    return (
        <div className="parallax" style={{ overflow: "hidden", letterSpacing: "-2px", lineHeight: 0.8, margin: 0, whiteSpace: "nowrap", display: "flex", flexWrap: "nowrap" }}>
            <motion.div className={`scroller ${className}`} style={{ x, display: "flex", whiteSpace: "nowrap", flexWrap: "nowrap" }}>
                <span style={{ display: "block", marginRight: "30px" }}>{children} </span>
                <span style={{ display: "block", marginRight: "30px" }}>{children} </span>
                <span style={{ display: "block", marginRight: "30px" }}>{children} </span>
                <span style={{ display: "block", marginRight: "30px" }}>{children} </span>
            </motion.div>
        </div>
    );
}

interface ScrollVelocityProps {
    text: string;
    velocity?: number;
    className?: string;
}

export default function ScrollVelocity({ text, velocity = 5, className }: ScrollVelocityProps) {
    return (
        <section style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
            <ParallaxText baseVelocity={velocity} className={className}>{text}</ParallaxText>
            <ParallaxText baseVelocity={-velocity} className={className}>{text}</ParallaxText>
        </section>
    );
}

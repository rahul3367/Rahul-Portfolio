// src/components/Earth.jsx
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Earth({ scrollProgress }) {
    const mountRef = useRef(null);
    const earthMeshRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        const width = mount.clientWidth;
        const height = mount.clientHeight;

        // --- Scene Setup ---
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        camera.position.z = 2.5;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // alpha: true = transparent background
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        mount.appendChild(renderer.domElement);

        // --- Earth Sphere ---
        const geometry = new THREE.SphereGeometry(1, 64, 64);

        // Load a real Earth texture from a public CDN
        const textureLoader = new THREE.TextureLoader();
        const earthTexture = textureLoader.load(
            "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        );

        const material = new THREE.MeshPhongMaterial({ map: earthTexture });
        const earth = new THREE.Mesh(geometry, material);
        scene.add(earth);
        earthMeshRef.current = earth;

        // --- Lighting ---
        // Ambient light so the dark side isn't pitch black
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        scene.add(ambientLight);

        // Directional light simulates sunlight from the right
        const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
        dirLight.position.set(5, 3, 5);
        scene.add(dirLight);

        // --- Animation Loop ---
        let animId;
        const animate = () => {
            animId = requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        // --- Cleanup on unmount ---
        return () => {
            cancelAnimationFrame(animId);
            mount.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []); // runs once on mount

    // Whenever scrollProgress changes (0 to 1), rotate the Earth
    useEffect(() => {
        if (earthMeshRef.current) {
            // Map scroll progress to a full rotation (0 → 2π radians)
            earthMeshRef.current.rotation.y = scrollProgress * Math.PI * 2;
        }
    }, [scrollProgress]);

    return (
        <div
            ref={mountRef}
            style={{ width: "500px", height: "500px" }}
        />
    );
}
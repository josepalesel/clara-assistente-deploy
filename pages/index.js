import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold mb-4">Olá, sou a Clara! 🩺</h1>
        <p className="mb-4 max-w-xl">
          Estou aqui para ajudar você com uma consulta rápida e inteligente.
          Use sua voz ou texto para conversar comigo em Português, Espanhol ou Inglês.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
          Começar Consulta
        </button>
      </motion.div>
    </div>
  );
}

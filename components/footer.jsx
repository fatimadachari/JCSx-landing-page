import React from "react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-gray-800 py-12 px-10">
            <div className="container mx-auto px-4 py-4">


                {/* Rodapé inferior */}
                <div className="pt-8 flex flex-col md:flex-row justify-center items-center py-4">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 JCSx Sistemas. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { Manifesto } from './components/Manifesto';
import { Footer } from './components/Footer';
import { AccessModal } from './components/AccessModal';

export default function App() {
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f5] text-[#1c1917] selection:bg-[#c27803]/15 selection:text-[#78350f]">
      {/* Top Header */}
      <Header onOpenAccess={() => setIsAccessModalOpen(true)} />

      {/* Main Single Scroll Editorial Section */}
      <main className="flex-1">
        <Manifesto />
      </main>

      {/* Minimal Footer */}
      <Footer />


      {/* Access Modal */}
      <AccessModal
        isOpen={isAccessModalOpen}
        onClose={() => setIsAccessModalOpen(false)}
      />
    </div>
  );
}


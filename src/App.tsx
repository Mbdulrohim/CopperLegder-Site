/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CapabilitiesPage, ContactPage, HomePage, WorkPage } from './components/Pages';
import { NoteArticlePage, NotesPage, TeamPage } from './components/EditorialPages';

export type SitePath = '/' | '/work/' | '/capabilities/' | '/team/' | '/notes/' | '/notes/software-should-follow-the-business/' | '/contact/';

const normalisePath = (path: string): SitePath => {
  if (path === '/work' || path === '/work/') return '/work/';
  if (path === '/capabilities' || path === '/capabilities/') return '/capabilities/';
  if (path === '/team' || path === '/team/') return '/team/';
  if (path === '/notes' || path === '/notes/') return '/notes/';
  if (path === '/notes/software-should-follow-the-business' || path === '/notes/software-should-follow-the-business/') return '/notes/software-should-follow-the-business/';
  if (path === '/contact' || path === '/contact/') return '/contact/';
  return '/';
};

interface AppProps {
  path?: string;
}

export default function App({ path }: AppProps) {
  const currentPath = normalisePath(
    path ?? (typeof window === 'undefined' ? '/' : window.location.pathname),
  );
  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f5] text-[#1c1917] selection:bg-[#c27803]/15 selection:text-[#78350f]">
      <Header currentPath={currentPath} />
      <main className="flex-1">
        {currentPath === '/' && <HomePage />}
        {currentPath === '/work/' && <WorkPage />}
        {currentPath === '/capabilities/' && <CapabilitiesPage />}
        {currentPath === '/team/' && <TeamPage />}
        {currentPath === '/notes/' && <NotesPage />}
        {currentPath === '/notes/software-should-follow-the-business/' && <NoteArticlePage />}
        {currentPath === '/contact/' && <ContactPage />}
      </main>
      <Footer />
    </div>
  );
}

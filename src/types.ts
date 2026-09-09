export interface Footnote {
  id: number;
  author: string;
  title: string;
  source: string;
  date: string;
}

export interface LedgerEntry {
  id: string;
  timestamp: string;
  description: string;
  accountDebit: string;
  accountCredit: string;
  amount: string;
  actor: {
    name: string;
    type: 'agent' | 'human';
    avatar: string;
  };
  hash: string;
}

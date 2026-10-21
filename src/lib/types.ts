export interface UtmParameters {
  baseUrl: string;
  source: string;
  medium: string;
  campaign: string;
  term: string;
  content: string;
}

export interface PresetTemplate {
  id: string;
  name: string;
  platform: string;
  iconName: string;
  source: string;
  medium: string;
  campaignDefault: string;
  description: string;
}

export interface CampaignData {
  id: string;
  name: string;
  source: string;
  medium: string;
  clicks: number;
  conversions: number;
  conversionRate: string;
  spend: string;
  revenue: string;
  roas: string;
  status: 'active' | 'paused' | 'scheduled';
}

export interface ChannelMetric {
  channel: string;
  sessions: number;
  percentage: number;
  conversions: number;
  revenue: string;
  color: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'UTM Basics' | 'Attribution' | 'Privacy & Analytics';
}

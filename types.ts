export interface AnalysisResult {
  verdict: 'AI GENERATED' | 'HUMAN VERIFIED' | 'UNCERTAIN';
  confidence: number;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  safetyPercentage: number;
  safetyAccuracy?: number; // New field for safety score precision
  isSpam: boolean;
  fraudType?: string;
  scamAdvice?: string;
  timestamp: string;
  details: string[];
  voiceAnalysis: {
    level: string;
    quality: string;
    description: string;
  };
  messageDecoding: {
    language: string;
    sentiment: string;
    intent: string;
    keyWording: string[];
    riskReasoning: string;
    extractedFunction?: string;
  };
  technicalMetrics: {
    spectralInconsistency: string;
    backgroundNoiseLevel: string;
    breathPatternAnalysis: string;
  };
}

export interface TranslationResult {
  originalText: string;
  translatedText: string;
  detectedLanguage: string;
  detectedLanguageConfidence?: number;
  targetLanguage: string;
}

export interface HistoryItem {
  id: string;
  timestamp: number;
  type: 'DETECTOR' | 'TRANSLATOR';
  summary: string;
  detail: string;
}

export enum AppRoute {
  HOME = '/',
  FORENSICS = '/forensics',
  TRANSLATOR = '/translator'
}

export interface AudioInputProps {
  onAudioReady: (base64: string, mimeType: string) => void;
  isProcessing: boolean;
}
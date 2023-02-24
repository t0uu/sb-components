import './myLabel.css';
export interface Props {
    /**
      * Texto que se muestra
      */
    label: string;
    /**
     * Tamaño del Texto
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    AllCaps: boolean;
    color: 'text-primary' | 'text-secondary' | 'text-tertiary';
    fontColor: string;
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, AllCaps, color, fontColor, backgroundColor }: Props) => JSX.Element;

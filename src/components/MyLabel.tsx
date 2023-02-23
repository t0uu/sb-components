import './myLabel.css'


interface Props {
 /**
   * Texto que se muestra 
   */
label: string;
/**
 * Tamaño del Texto
 */
size: 'normal'| 'h1' | 'h2' | 'h3';

AllCaps: boolean

color: 'text-primary' | 'text-secondary' | 'text-tertiary'

fontColor: string;

backgroundColor?: string;

}


export const MyLabel = ({label = 'No Label' ,size = 'normal',AllCaps = false,color = 'text-primary', fontColor,backgroundColor = 'transparent' }: Props) => {
  return ( 
    <span className={` label ${size} ${color} ${AllCaps && `text-uppercase`} `} style={{color: fontColor,backgroundColor}}>
        {label}
    </span>
    )
}

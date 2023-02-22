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

fontColor: '#5517ac'
}


export const MyLabel = ({label = 'No Label' ,size = 'normal',AllCaps = false,color = 'text-primary', fontColor }: Props) => {
  return ( 
    <span className={` label ${size} ${color} ${AllCaps && `text-uppercase`} `} style={{backgroundColor: `${fontColor}`}}>
        {label}
    </span>
    )
}

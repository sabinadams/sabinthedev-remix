import { useState } from 'react';

export default function useSamePageNavigation(): {
    current: string,
    scrollToSection: ( id: string ) => void
} {
    const [current, setCurrent] = useState('');
  
    const scrollToSection = (id: string ) => {
        if ( !id ) return
        setCurrent(id)
        let element = document.getElementById(id)
        element && element && element.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
  
    return { current, scrollToSection }
}
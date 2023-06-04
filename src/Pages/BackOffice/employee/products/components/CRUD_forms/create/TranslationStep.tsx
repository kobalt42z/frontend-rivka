import { Accordion } from 'flowbite-react'
import React from 'react'
import TranslationForm from './TranslationForm'
import { useAppSelector } from '../../../../../../../features/hooks'
import { languages } from '../../../../../../../interfaces/product.interface'
import { Icon } from '@iconify/react'
interface props {
    languages: languages[]
}
const TranslationStep: React.FC<props> = ({ languages }) => {

    
    const translations = useAppSelector(state => state.productFrom.translations)
    return (
        <Accordion  >
            {
                languages.map((item, i) => {
                    return (
                        <Accordion.Panel >
                            <Accordion.Title>
                                <div className='flex items-center capitalize '>
                                    {translations[languages[i]] &&
                                        <Icon icon="material-symbols:done" color="green" className='mx-1' />}
                                    {item}
                                </div>
                            </Accordion.Title>
                            <Accordion.Content>
                                <TranslationForm language={item} />
                            </Accordion.Content>
                        </Accordion.Panel>
                    )
                })
            }


        </Accordion>
    )
}

export default TranslationStep
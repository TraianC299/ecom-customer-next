import React from 'react'
import styled from 'styled-components'
import Option from '../Input/Option'
import { useLanguage } from '../../Contexts/LnaguageContext'
import { Padding, InputButtonsGrid } from '../../Styles'

const romanianFlagSVG = <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4_7265)">
<path d="M345.043 15.922C317.309 5.633 287.314 1.33097e-07 256 1.33097e-07C224.686 -0.000999867 194.69 5.633 166.957 15.922L144.696 255.999L166.957 496.076C194.689 506.368 224.685 512 256 512C287.313 512 317.31 506.368 345.043 496.076L367.303 256L345.043 15.922Z" fill="#FFDA44"/>
<path d="M512 256C512 145.93 442.528 52.093 345.043 15.923V496.079C442.528 459.905 511.999 366.072 512 256Z" fill="#D80027"/>
<path d="M0 255.999C0 366.072 69.472 459.905 166.955 496.078L166.956 15.924C69.472 52.094 0 145.928 0 255.999H0Z" fill="#0052B4"/>
</g>
<defs>
<clipPath id="clip0_4_7265">
<rect width="512" height="512" fill="white"/>
</clipPath>
</defs>
</svg>


const russianSvg = <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z" fill="#F0F0F0"/>
<path d="M496.077 345.043C506.368 317.31 512 287.314 512 256C512 224.686 506.368 194.69 496.077 166.957H15.923C5.633 194.69 0 224.686 0 256C0 287.314 5.633 317.31 15.923 345.043L256 367.304L496.077 345.043Z" fill="#0052B4"/>
<path d="M256 512C366.071 512 459.906 442.528 496.077 345.043H15.9231C52.0941 442.528 145.929 512 256 512Z" fill="#D80027"/>
</svg>


const englishSVG = <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4_7323)">
<path d="M256 511.999C397.385 511.999 512 397.384 512 255.999C512 114.614 397.385 -0.000976562 256 -0.000976562C114.615 -0.000976562 0 114.614 0 255.999C0 397.384 114.615 511.999 256 511.999Z" fill="#F0F0F0"/>
<path d="M244.87 255.999H512C512 232.893 508.92 210.509 503.181 189.216H244.87V255.999Z" fill="#D80027"/>
<path d="M244.87 122.434H474.426C458.755 96.8619 438.718 74.2589 415.356 55.6509H244.87V122.434Z" fill="#D80027"/>
<path d="M256 511.999C316.249 511.999 371.626 491.175 415.356 456.347H96.644C140.374 491.175 195.751 511.999 256 511.999Z" fill="#D80027"/>
<path d="M37.5738 389.564H474.426C487.007 369.035 496.764 346.595 503.181 322.781H8.81885C15.2358 346.595 24.9928 369.035 37.5738 389.564Z" fill="#D80027"/>
<path d="M118.584 39.977H141.913L120.213 55.742L128.502 81.251L106.803 65.486L85.104 81.251L92.264 59.214C73.158 75.129 56.412 93.775 42.612 114.551H50.087L36.274 124.586C34.122 128.176 32.058 131.823 30.08 135.524L36.676 155.825L24.37 146.884C21.311 153.365 18.513 159.992 15.998 166.757L23.265 189.125H50.087L28.387 204.89L36.676 230.399L14.977 214.634L1.979 224.078C0.678 234.536 0 245.188 0 255.999H256C256 114.615 256 97.947 256 -0.000976562C205.428 -0.000976562 158.285 14.669 118.584 39.977ZM128.502 230.399L106.803 214.634L85.104 230.399L93.393 204.89L71.693 189.125H98.515L106.803 163.616L115.091 189.125H141.913L120.213 204.89L128.502 230.399ZM120.213 130.316L128.502 155.825L106.803 140.06L85.104 155.825L93.393 130.316L71.693 114.551H98.515L106.803 89.042L115.091 114.551H141.913L120.213 130.316ZM220.328 230.399L198.629 214.634L176.93 230.399L185.219 204.89L163.519 189.125H190.341L198.629 163.616L206.917 189.125H233.739L212.039 204.89L220.328 230.399ZM212.039 130.316L220.328 155.825L198.629 140.06L176.93 155.825L185.219 130.316L163.519 114.551H190.341L198.629 89.042L206.917 114.551H233.739L212.039 130.316ZM212.039 55.742L220.328 81.251L198.629 65.486L176.93 81.251L185.219 55.742L163.519 39.977H190.341L198.629 14.468L206.917 39.977H233.739L212.039 55.742Z" fill="#0052B4"/>
</g>
<defs>
<clipPath id="clip0_4_7323">
<rect width="512" height="512" fill="white" transform="translate(0 -0.000976562)"/>
</clipPath>
</defs>
</svg>


const LanguageOption  = styled(Option)`
position:relative;
>div{
    display:flex;
    align-items:center;
    justify-content:center;
    width: fit-content;
    height: 100%;
    >svg{
  height: 60%;
  margin-right: 10px;
  width: auto;

}
}

`
const LanguagePage = () => {
    const {language, setLanguage} = useLanguage()
    console.log(language)
  return (
      <Padding>
          {/* <h2 className="h4">{translate("What language do you prefer?")}</h2> */}
    <InputButtonsGrid>
        <LanguageOption single id={2} selectedOptions={language} setSelectedOptions={setLanguage}>
            <div>{romanianFlagSVG}Romana</div>
        </LanguageOption>
        <LanguageOption single id={2} selectedOptions={language} setSelectedOptions={setLanguage}>
            <div>
                {russianSvg}
                Rusa
            </div>
        </LanguageOption>
        <LanguageOption single id={2} selectedOptions={language} setSelectedOptions={setLanguage}>
            <div>
                {englishSVG}
                Engleza
            </div>
        </LanguageOption>
    </InputButtonsGrid>
    </Padding>
  )
}

export default LanguagePage
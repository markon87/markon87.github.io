import { FaFilePdf } from 'react-icons/fa'

export default function CirclePdfLink({ pdfLink }) {
  return (
    <a href={pdfLink} target="_blank" rel="noreferrer" className="download-resume-round">
    <svg id="circle-text" viewBox="0 0 357 357">
      <text className="cls-1" transform="translate(178.05 35.03) rotate(4.66)"><tspan x="0" y="0">D</tspan></text>
      <text className="cls-1" transform="translate(201.46 36.84) rotate(14.06)"><tspan x="0" y="0">o</tspan></text>
      <text className="cls-1" transform="translate(224.27 42.46) rotate(23.52)"><tspan x="0" y="0">w</tspan></text>
      <text className="cls-1" transform="translate(245.83 51.75) rotate(32.92)"><tspan x="0" y="0">n</tspan></text>
      <text className="cls-1" transform="translate(265.61 64.44) rotate(42.28)"><tspan x="0" y="0">l</tspan></text>
      <text className="cls-1" transform="translate(283.05 80.18) rotate(51.61)"><tspan x="0" y="0">o</tspan></text>
      <text className="cls-1" transform="translate(297.72 98.54) rotate(60.99)"><tspan x="0" y="0">a</tspan></text>
      <text className="cls-1" transform="translate(309.19 119.03) rotate(70.42)"><tspan x="0" y="0">d</tspan></text>
      <text className="cls-1" transform="translate(317.14 141.13) rotate(79.87)"><tspan x="0" y="0"> </tspan></text>
      <text className="cls-1" transform="translate(321.33 164.17) rotate(89.07)"><tspan x="0" y="0">M</tspan></text>
      <text className="cls-1" transform="translate(321.78 187.72) rotate(98.51)"><tspan x="0" y="0">y</tspan></text>
      <text className="cls-1" transform="translate(318.4 210.97) rotate(107.95)"><tspan x="0" y="0"> </tspan></text>
      <text className="cls-1" transform="translate(311.25 233.33) rotate(117.39)"><tspan x="0" y="0">R</tspan></text>
      <text className="cls-1" transform="translate(300.52 254.24) rotate(126.78)"><tspan x="0" y="0">e</tspan></text>
      <text className="cls-1" transform="translate(286.54 273.09) rotate(136.11)"><tspan x="0" y="0">s</tspan></text>
      <text className="cls-1" transform="translate(269.65 289.46) rotate(145.46)"><tspan x="0" y="0">u</tspan></text>
      <text className="cls-1" transform="translate(250.35 302.86) rotate(154.86)"><tspan x="0" y="0">m</tspan></text>
      <text className="cls-1" transform="translate(229.14 312.92) rotate(164.31)"><tspan x="0" y="0">e</tspan></text>
      <text className="cls-1" transform="translate(206.55 319.35) rotate(173.74)"><tspan x="0" y="0">•</tspan></text>
      <text className="cls-1" transform="translate(183.21 322) rotate(-177)"><tspan x="0" y="0">D</tspan></text>
      <text className="cls-1" transform="translate(159.73 320.87) rotate(-167.61)"><tspan x="0" y="0">o</tspan></text>
      <text className="cls-1" transform="translate(136.79 315.92) rotate(-158.16)"><tspan x="0" y="0">w</tspan></text>
      <text className="cls-1" transform="translate(114.96 307.27) rotate(-148.74)"><tspan x="0" y="0">n</tspan></text>
      <text className="cls-1" transform="translate(94.83 295.15) rotate(-139.38)"><tspan x="0" y="0">l</tspan></text>
      <text className="cls-1" transform="translate(76.94 279.93) rotate(-130.04)"><tspan x="0" y="0">o</tspan></text>
      <text className="cls-1" transform="translate(61.75 262) rotate(-120.68)"><tspan x="0" y="0">a</tspan></text>
      <text className="cls-1" transform="translate(49.68 241.85) rotate(-111.26)"><tspan x="0" y="0">d</tspan></text>
      <text className="cls-1" transform="translate(41.08 219.99) rotate(-101.8)"><tspan x="0" y="0"> </tspan></text>
      <text className="cls-1" transform="translate(36.19 197.01) rotate(-92.43)"><tspan x="0" y="0">M</tspan></text>
      <text className="cls-1" transform="translate(35.1 173.54) rotate(-83.15)"><tspan x="0" y="0">y</tspan></text>
      <text className="cls-1" transform="translate(37.81 150.21) rotate(-73.72)"><tspan x="0" y="0"> </tspan></text>
      <text className="cls-1" transform="translate(44.3 127.64) rotate(-64.27)"><tspan x="0" y="0">R</tspan></text>
      <text className="cls-1" transform="translate(54.41 106.45) rotate(-54.88)"><tspan x="0" y="0">e</tspan></text>
      <text className="cls-1" transform="translate(67.86 87.17) rotate(-45.53)"><tspan x="0" y="0">s</tspan></text>
      <text className="cls-1" transform="translate(84.26 70.34) rotate(-36.19)"><tspan x="0" y="0">u</tspan></text>
      <text className="cls-1" transform="translate(103.16 56.39) rotate(-26.81)"><tspan x="0" y="0">m</tspan></text>
      <text className="cls-1" transform="translate(124.06 45.72) rotate(-17.37)"><tspan x="0" y="0">e</tspan></text>
      <text className="cls-1" transform="translate(146.47 38.62) rotate(-7.92)"><tspan x="0" y="0">•</tspan></text>
      <text/>
    </svg>
    <span className="pdf-icon"><FaFilePdf /></span>
  </a>
  )
}
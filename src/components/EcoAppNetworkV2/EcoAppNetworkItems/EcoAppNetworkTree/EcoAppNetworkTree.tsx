import React from "react";
import "./EcoAppNetworkTree.scss";

interface EcoAppNetworkTreeProps {
  variant: "meal" | "cheap" | "eco";
  lineId: string[];
}

export const EcoAppNetworkTree: React.FC<EcoAppNetworkTreeProps> = ({
  variant,
  lineId,
}) => {
  return (
    <div className={`eco-app-network-tree eco-app-network-tree--${variant}`}>
      <svg viewBox="0 0 340 50">
        <defs>
          <filter id="glow" x="-500%" y="-500%" width="1000%" height="1000%">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="8"
              result="blur1"
            />
            <feGaussianBlur in="blur1" stdDeviation="4" result="blur2" />
            <feGaussianBlur in="blur1" stdDeviation="2" result="blur3" />
            <feMerge>
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="blur3" />
            </feMerge>
          </filter>
        </defs>

        <path
          className="light-green"
          id="line1"
          d="M5,150 L125,270 L125,360"
          stroke="#3E853E"
          strokeWidth="3"
          fill="none"
        />

        {/* <!-- Start line with elements --> */}
        <path
          className="accent-green"
          id="line2"
          d="M15,110 L70,165 L70,190 L15,135"
          stroke="#00FF00"
          strokeWidth="4"
          fill="none"
        />
        <circle cx="15" cy="110" r="5" fill="#00FF00" />
        {/* <!-- End line with elements --> */}

        <path
          className="dark-green"
          id="line3"
          d="M5,40 L15,50 L15,90 L85,160 L85,220 L135,270 L135,360"
          stroke="#0A370A"
          strokeWidth="3"
          fill="none"
        />

        {/* <!-- Start line with elements --> */}
        <path
          className="accent-green"
          id="line4"
          d="M10,-15 L10,25"
          stroke="#00FF00"
          strokeWidth="4"
          fill="none"
        />
        <circle
          cx="10"
          cy="-20"
          r="5"
          fill="none"
          stroke="#00FF00"
          strokeWidth="3"
        />
        <circle cx="10" cy="25" r="5" fill="#00FF00" />
        {/* <!-- End line with elements --> */}

        {/* <!-- Start line with elements --> */}
        <path
          className="dark-green"
          id="line5"
          d="M5,-47 L25,-27 L25,65 L95,135 L95,200"
          stroke="#0A370A"
          strokeWidth="3"
          fill="none"
        />
        <rect x="90" y="135" width="10" height="10" fill="#00FF00" />
        {/* <!-- End line with elements --> */}

        {/* <!-- Start line with elements --> */}
        <path
          className="dark-green"
          id="line6"
          d="M5,-95 L5,-72 L40,-37 L40,53 L105,118 L105,210 L145,250 L145,360"
          stroke="#0A370A"
          strokeWidth="3"
          fill="none"
        />
        <rect x="140" y="245" width="10" height="10" fill="#00FF00" />
        {/* <!-- End line with elements --> */}

        {/* <!-- Start line with elements --> */}
        <path
          className="accent-green"
          id="line7"
          d="M7,-220 L7,-100 L25,-82 L25,-60 L45,-40 L45,50 L115,120 L115,150 L160,195 L160,360"
          stroke="#00FF00"
          strokeWidth="4"
          fill="none"
        />
        <circle
          cx="7"
          cy="-225"
          r="5"
          fill="none"
          stroke="#00FF00"
          strokeWidth="3"
        />
        {/* <!-- End line with elements --> */}

        {/* <!-- Start line with elements --> */}
        <path
          className="dark-green"
          id="line8"
          d="M15,-240 L15,-120 L32,-103 L32,-85 L52,-65 L52,45 L123,116 L123,148 L165,190 L165,360"
          stroke="#0A370A"
          strokeWidth="3"
          fill="none"
        />
        <circle cx="15" cy="-240" r="5" fill="#00FF00" />
        <rect x="47" y="-65" width="10" height="10" fill="#00FF00" />
        {/* <!-- End line with elements --> */}

        {/* <!-- Start line with elements --> */}
        <path
          className="accent-green"
          id="line9"
          d="M187,360 L187,190 L178,181 L178,250 L170,258 L170,290 L178,298 L178,310"
          stroke="#00FF00"
          strokeWidth="4"
          fill="none"
        />
        <circle cx="178" cy="310" r="5" fill="#00FF00" />
        {/* <!-- End line with elements --> */}

        {/* <!-- Start line with elements --> */}
        <path
          className="accent-green"
          id="line10"
          d="M100,-200 L100,-140 L80,-120 L80,30 L150,100 L150,130 L195,175 L195,360"
          stroke="#00FF00"
          strokeWidth="4"
          fill="none"
        />
        <circle
          cx="100"
          cy="-205"
          r="5"
          fill="none"
          stroke="#00FF00"
          strokeWidth="3"
        />
        <circle cx="150" cy="110" r="5" fill="#00FF00" />
        <rect x="95" y="-145" width="10" height="10" fill="#00FF00" />
        {/* <!-- End line with elements --> */}

        {/* <!-- Start line with elements --> */}
        <path
          className="accent-green"
          id="line11"
          d="M130,-150 L95,-115 L95,20 L110,35 L110,-110"
          stroke="#00FF00"
          strokeWidth="4"
          fill="none"
        />
        <circle
          cx="110"
          cy="-115"
          r="5"
          fill="none"
          stroke="#00FF00"
          strokeWidth="3"
        />
        <circle cx="130" cy="-150" r="5" fill="#00FF00" />
        {/* <!-- End line with elements --> */}

        {/* <!-- Start line with elements --> */}
        <path
          className="accent-green"
          id="line12"
          d="M125,-100 L125,13 L190,78 L190,125 L140,75"
          stroke="#00FF00"
          strokeWidth="4"
          fill="none"
        />
        <rect x="120" y="-50" width="10" height="10" fill="#00FF00" />
        {/* <!-- End line with elements --> */}

        {/* <!-- Start line with elements --> */}
        <path
          className="light-green"
          id="line13"
          d="M180,-140 L180,-110 L160,-90 L160,10 L200,50 L200,360"
          stroke="#3E853E"
          strokeWidth="3"
          fill="none"
        />
        <circle cx="180" cy="-140" r="5" fill="#00FF00" />
        {/* <!-- End line with elements --> */}

        {/* <!-- Start line with elements --> */}
        <path
          className="light-green"
          id="line14"
          d="M207,260 L207,57 L222,42 L222,200"
          stroke="#3E853E"
          strokeWidth="3"
          fill="none"
        />
        <rect x="202" y="150" width="10" height="10" fill="#00FF00" />
        {/* <!-- End line with elements --> */}

        {/* <!-- Start line with elements --> */}
        <path
          className="light-green"
          id="line15"
          d="M185,-90 L185,-70 L170,-55 L170,-30 L230,30 L230,260 L207,283 L207,360"
          stroke="#3E853E"
          strokeWidth="3"
          fill="none"
        />
        <circle cx="185" cy="-90" r="5" fill="#00FF00" />
        {/* <!-- End line with elements --> */}

        {/* <!-- Start line with elements --> */}
        <path
          className="light-green"
          id="line16"
          d="M235,-50 L235,280 L265,250 L265,175 L240,155 L240,-20 L260,-40 L260,-80"
          stroke="#3E853E"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="260"
          cy="-85"
          r="5"
          fill="none"
          stroke="#00FF00"
          strokeWidth="3"
        />
        {/* <!-- End line with elements --> */}

        {/* <!-- Start line with elements --> */}
        <path
          className="accent-green"
          id="line17"
          d="M280,10 L280,60 L250,90 L250,140"
          stroke="#00FF00"
          strokeWidth="4"
          fill="none"
        />
        <circle cx="280" cy="10" r="5" fill="#00FF00" />
        <rect x="245" y="135" width="10" height="10" fill="#00FF00" />
        {/* <!-- End line with elements --> */}

        {/* <!-- Start line with elements --> */}
        <path
          className="light-green"
          id="line18"
          d="M310,-20 L310,45 L260,95 L260,160 L270,170 L270,260 L235,295 L235,305 L220,320 L220,360"
          stroke="#3E853E"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="310"
          cy="-25"
          r="5"
          fill="none"
          stroke="#00FF00"
          strokeWidth="3"
        />
        {/* <!-- End line with elements --> */}

        {/* <!-- Start line with elements --> */}
        <path
          className="light-green"
          id="line19"
          d="M320,-130 L320,90 L280,130 L280,270 L225,325 L225,360"
          stroke="#3E853E"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="320"
          cy="-135"
          r="5"
          fill="none"
          stroke="#00FF00"
          strokeWidth="3"
        />
        {/* <!-- End line with elements --> */}

        {/* <!-- Start line with elements --> */}
        <path
          className="accent-green"
          id="line20"
          d="M345,130 L295,180 L295,290 L260,325 L260,360"
          stroke="#00FF00"
          strokeWidth="4"
          fill="none"
        />
        <rect x="290" y="175" width="10" height="10" fill="#00FF00" />
        {/* <!-- End line with elements --> */}

        {lineId.map((id, index) => (
          <circle
            key={index}
            className="dot"
            cx="0"
            cy="0"
            r="5"
            fill="rgb(0, 179, 15)"
            filter="url(#glow)"
          >
            <animateMotion
              repeatCount="indefinite"
              dur={`${3 + index * 2}s`}
              keyPoints="0;1;0"
              keyTimes="0;0.5;1"
            >
              <mpath href={`#${id}`} />
            </animateMotion>
          </circle>
        ))}
      </svg>
    </div>
  );
};

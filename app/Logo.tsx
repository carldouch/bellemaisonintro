import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/all";

gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin);

const SvgComponent = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  const textRef = useRef<SVGTextElement>(null);
  const textRef2 = useRef(null);
  const holderRef = useRef(null);
  const svgRef = useRef(null);
  const contourRef = useRef(null)

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { y: 0 },
        { y: isMobile ? 20 : 35, x: isMobile? -1.8 : 0.8, letterSpacing: isMobile ? ".402313px" : "0.6px", duration: 2, delay: 1 }
      );
    }

    if (holderRef.current) {
      gsap.to(holderRef.current, {
        duration: 2,
        x: isMobile ? 7.4 : -2.2,
        y: isMobile ? 64 : 45,
        ease: "power1.inOut",
        morphSVG: `M99.552,213.054 L320.552,213.054`,
        delay: 1,
      });
    }

    if(textRef2.current){
      gsap.to(textRef2.current,{
        scale: isMobile ? 0.8 : 1.2,
        delay: 1.5,
        letterSpacing: isMobile ? ".214312px" : "0.6px",
      });
    }

    if (svgRef.current) {
      gsap.from(svgRef.current, {opacity:0})
      gsap.to(svgRef.current, {
        scale: isMobile ? 1 : 1.5,
        opacity:1,
        duration: 2,
        delay: 0,
      });
      gsap.to(svgRef.current, {
        y: isMobile ? 80 : -800,
        scale: isMobile ? 1.1 : 4,
        duration: 1,
        delay: 3,
      });
    }

    if(contourRef.current){
      gsap.to(contourRef.current, {
        duration: 2,
        opacity:0,
        ease: "power1.inOut",
        delay: 5,
      });

    }
  }, []);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      width={300.296}
      height={600.481}
      viewBox="-15 -15 90.932 97.596"
      opacity="0"
      {...props}
    >
      <defs>
        <linearGradient id="b">
          <stop
            offset={0}
            style={{
              stopColor: "#2a2a2a",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "#000",
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient id="a">
          <stop
            offset={0}
            style={{
              stopColor: "#000",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "#000",
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient
          xlinkHref="#a"
          id="d"
          x1={23.685}
          x2={40.345}
          y1={448.063}
          y2={448.063}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#b"
          id="f"
          x1={23.685}
          x2={40.345}
          y1={448.063}
          y2={448.063}
          gradientTransform="translate(1.336 74.85) scale(.82939)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#a"
          id="e"
          x1={23.685}
          x2={40.345}
          y1={448.063}
          y2={448.063}
          gradientUnits="userSpaceOnUse"
        />
      </defs>
      <g transform="translate(-100.004 -181.298)">
        <path
          ref={holderRef}
          id="c"
          d="M110.552 213.054s3.412-20.739 22.75-20.739c18.81 0 22.16 19.679 22.16 19.679"
          // d="M110.552 213.054h44.91"
          style={{
            display: "inline",
            fill: "none",
            stroke: "none",
            strokeWidth: 0.4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        />
        <path
          d="m130.307 182.318.094 65.48m.232-65.48-.094 65.48"
          style={{
            fill: "#2a2a2a",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 3.963,
            strokeDasharray: "none",
            strokeDashoffset: 463.471,
            strokeOpacity: 1,
          }}
        />
        <path
          ref={contourRef}
          d="M107.083 247.58H77.164l.139-38.542c.38-7.222 5.244-26.691 30.03-26.691m-1.525 65.234h29.918l-.138-38.543c-.38-7.222-5.245-26.691-30.03-26.691"
          style={{
            display: "inline",
            fill: "#f6f2e7",
            fillOpacity: 0,
            stroke: "#2a2a2a",
            strokeWidth: 2.362,
            strokeDasharray: "none",
            strokeDashoffset: 122.627,
            strokeOpacity: 1,
          }}
          transform="translate(24.025 .132)"
        />
        <path
          d="M107.205 247.583H77.163l.139-38.573c.38-7.227 5.32-26.712 30.154-26.712m-1.77 65.285h30.041l-.138-38.573c-.381-7.227-5.32-26.712-30.154-26.712"
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#f6f2e7",
            strokeWidth: 1.363,
            strokeDasharray: "none",
            strokeDashoffset: 122.627,
            strokeOpacity: 1,
          }}
          transform="translate(24.025 .132)"
        />
        <text
          ref={textRef}
          xmlSpace="preserve"
          x={103.696}
          y={243.913}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 500,
            fontStretch: "normal",
            fontSize: "4.56987px",
            lineHeight: 0,
            fontFamily: "BodoniFLF",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
            letterSpacing: ".214312px",
            fill: "#2a2a2a",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.311582,
            strokeOpacity: 1,
          }}
        >
          <tspan
            x={103.696}
            y={243.913}
            style={{
              fontSize: "4.56987px",
              lineHeight: 0,
              letterSpacing: ".202313px",
              fill: "#2a2a2a",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0.311582,
              strokeOpacity: 1,
            }}
          >
            {"Accessoiristes d'int\xE9rieurs"}
          </tspan>
        </text>
        <path
          d="M106.418 213.895v-4.98m.054 4.98v-4.98M96.126 232.067v-16.823h-.969l.017-.663h.936l-.017-1.856-1.291-1.291h.646l1.39-5.19v-1.688h1.645v1.485h3.713v-1.582s2.134-1.115 4.268-1.115m10.3 28.723v-16.823h.97l-.017-.663h-.937l.017-1.856 1.291-1.291h-.645l-1.391-5.19v-1.688h-1.645v1.485h-3.713v-1.582s-2.133-1.115-4.267-1.115M106.642 235.877h-5.576l-.065-1.615 2.164-2.163h-7.976m11.06 3.778h5.575l.065-1.615-2.163-2.163h7.975"
          style={{
            fill: "none",
            stroke: "#2a2a2a",
            strokeWidth: 0.312628,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.19367 0 0 1.09243 3.41 -20.271)"
        />
        <path
          d="M106.841 208.915h-2.433v4.973h2.185m-.544-4.973h2.433v4.973h-2.185M106.465 204.588s-1.702.081-2.331 1.276c-.148.24 0 1.921 0 1.921l-2.124 3.678h-6.578m10.993-6.875s1.702.081 2.332 1.276c.147.24 0 1.921 0 1.921l2.124 3.678h6.578"
          style={{
            fill: "none",
            stroke: "#2a2a2a",
            strokeWidth: 0.312628,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.19367 0 0 1.09243 3.41 -20.271)"
        />
        <path
          d="m101.866 211.459 1.606.02-1.156 1.156v1.916h.72v.693h-6.878m14.866-3.785-1.605.02 1.156 1.156v1.916h-.72v.693h6.877M95.39 232.102v2.163h5.68m16.431-2.163v2.163h-5.681M95.395 232.317zm22.1 0zM106.478 215.599h-2.116v6.052h2.232m-.182-6.052h2.117v6.052h-2.233M104.362 221.651l-.786.786h2.968m1.985-.786.785.786h-2.968"
          style={{
            fill: "none",
            stroke: "#2a2a2a",
            strokeWidth: 0.312628,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.19367 0 0 1.09243 3.41 -20.271)"
        />
        <path
          d="M106.56 216.112h-1.305v5.44m1.074-5.44h1.307v5.44M105.271 219.931h1.34m1.008 0h-1.34M105.255 217.947h1.372m1.009 0h-1.373M106.627 223.884h-3.125l-.699 1.21h3.824m-.364-1.21h3.126l.698 1.21h-3.824M106.644 235.03h-5.507m5.11 0h5.506M101.004 234.282h5.64m5.242 0h-5.64M101.749 233.524h4.878m4.515 0h-4.879M102.36 232.846h4.085m4.085 0h-4.085M103.209 232.101h3.506m2.966 0h-3.505M98.011 215.897h3.274v5.721h-3.274zm16.868 0h-3.274v5.721h3.274z"
          style={{
            fill: "none",
            stroke: "#2a2a2a",
            strokeWidth: 0.312628,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.19367 0 0 1.09243 3.41 -20.271)"
        />
        <path
          d="M97.22 215.247h4.86v7.363h-4.86zm18.451 0h-4.86v7.363h4.86zM97.754 224.641h4.21v5.8h-4.21zm17.383 0h-4.21v5.8h4.21z"
          style={{
            fill: "none",
            stroke: "#2a2a2a",
            strokeWidth: 0.312628,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.19367 0 0 1.09243 3.41 -20.271)"
        />
        <path
          d="M97.005 230.394h5.52v.889h-5.52zm18.88 0h-5.52v.889h5.52zM98.046 223.943h3.602v.701h-3.602zm16.798 0h-3.601v.701h3.601zM99.781 224.66v5.756m13.328-5.755v5.755M97.764 226.877h4.233m13.13 0h-4.234M97.764 228.795h4.2m13.163 0h-4.2M104.43 210.388h4.058m-.028 0h-4.058M104.442 212.025h4.023m-.017 0h-4.022M96.164 213.86h6.127m14.436 0H110.6M95.3 211.96h7.673m14.618 0h-7.673M98.326 211.465v-4.217h2.745v4.101m13.494.116v-4.217h-2.745v4.101"
          style={{
            fill: "none",
            stroke: "#2a2a2a",
            strokeWidth: 0.312628,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.19367 0 0 1.09243 3.41 -20.271)"
        />
        <path
          d="M98.946 210.44v-2.29h1.414v2.29zm14.998 0v-2.29h-1.413v2.29zM98.954 209.29h1.422m13.56 0h-1.422M99.665 208.15v2.33m13.56-2.33v2.33"
          style={{
            fill: "none",
            stroke: "#2a2a2a",
            strokeWidth: 0.312628,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.19367 0 0 1.09243 3.41 -20.271)"
        />
        <text
          xmlSpace="preserve"
          ref={textRef2}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 500,
            fontStretch: "normal",
            fontSize: "7.33049px",
            lineHeight: 0,
            fontFamily: "BodoniFLF",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
            letterSpacing: ".764646px",
            wordSpacing: ".0079375px",
            display: "inline",
            mixBlendMode: "normal",
            fill: "#2a2a2a",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.242157,
          }}
          transform="translate(-2.698 -1.469)"
        >
          <textPath
            xlinkHref="#c"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 500,
              fontStretch: "normal",
              fontSize: "7.33049px",
              lineHeight: 0,
              fontFamily: "BodoniFLF",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
              letterSpacing: ".764646px",
              wordSpacing: ".0079375px",
              fill: "#2a2a2a",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0.242157,
            }}
          >
            {"BELLE MAISON"}
          </textPath>
        </text>
        <path
          d="M98.532 206.04h-1.678m17.504 0h1.678M96.912 205.503h1.563m17.503 0h-1.562M99.625 215.942v5.683m13.64-5.683v5.683M98.034 217.976h3.228m13.594 0h-3.227M98.011 219.87h3.25m13.618 0h-3.25M103.502 225.107v6.962m5.887-6.962v6.962M106.627 226.496h-1.984v5.59m1.62-5.59h1.985v5.59M104.577 229.953h2.067m1.67 0h-2.067M96.11 212.771h6.102m14.568 0h-6.101M96.077 214.574l6.234-.017m14.503.017-6.235-.017"
          style={{
            fill: "none",
            stroke: "#2a2a2a",
            strokeWidth: 0.312628,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.19367 0 0 1.09243 3.41 -20.271)"
        />
        <path
          d="M81.18 236.76v-20.205m50.531 20.206v-20.206"
          style={{
            fill: "none",
            stroke: "#2a2a2a",
            strokeWidth: 0.4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(24.025 .132)"
        />
        <path
          d="M130.496 207.99v5.326m0 2.607v5.96m0 5.328v6.1"
          style={{
            fill: "red",
            stroke: "#2a2a2a",
            strokeWidth: 0.43692,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        />
        <g
          style={{
            fill: "url(#d)",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.821633,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(124.482 121.8) scale(.18743)"
        >
          <g
            style={{
              fill: "url(#e)",
              fillOpacity: 1,
              stroke: "#000",
              strokeWidth: 0.821633,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
          >
            <path
              d="M13.277 432.077a3.566 3.566 0 0 0-2.542-1.052c-.96 0-1.864.375-2.544 1.055l-.355.355-.361-.36a3.584 3.584 0 0 0-2.547-1.058 3.57 3.57 0 0 0-2.54 1.052 3.56 3.56 0 0 0-1.051 2.545 3.57 3.57 0 0 0 1.057 2.541l5.172 5.172a.371.371 0 0 0 .523.003l5.183-5.164a3.575 3.575 0 0 0 1.054-2.544 3.558 3.558 0 0 0-1.049-2.545zm-.529 4.564-4.92 4.901-4.91-4.91a2.835 2.835 0 0 1-.838-2.018c0-.763.295-1.48.834-2.016a2.831 2.831 0 0 1 2.014-.835c.762 0 1.481.298 2.02.838l.623.622a.37.37 0 0 0 .526 0l.617-.617a2.84 2.84 0 0 1 2.019-.837c.76 0 1.476.297 2.015.834.54.54.835 1.256.835 2.019a2.821 2.821 0 0 1-.835 2.019z"
              style={{
                fill: "url(#f)",
                fillOpacity: 1,
                stroke: "#2a2a2a",
                strokeWidth: 0.821633,
                strokeDasharray: "none",
                strokeOpacity: 1,
              }}
              transform="translate(24.183 11.746)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
export default SvgComponent;

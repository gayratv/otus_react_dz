import React from "react";

function SvgCalcSprite() {
  return (
    <div style={{ display: "none" }}>
      <h1>"Эта надпись должна быть скрыта"</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 64 64"
      >
        <symbol id="divide" viewBox="0 0 64 64">
          <path d="M64,37.313c0,1.658-1.343,3-3,3H3c-1.657,0-3-1.342-3-3V26.688c0-1.657,1.343-3,3-3h58c1.657,0,3,1.343,3,3V37.313z" />
          <circle cx="32" cy="11.167" r="11.167" />
          <circle cx="32" cy="52.833" r="11.167" />
        </symbol>

        <symbol id="equal" viewBox="0 0 64 64">
          <path d="M64,24.646c0,1.657-1.343,3-3,3H3c-1.657,0-3-1.343-3-3V14.021c0-1.657,1.343-3,3-3h58c1.657,0,3,1.343,3,3V24.646z" />
          <path d="M64,49.979c0,1.658-1.343,3-3,3H3c-1.657,0-3-1.342-3-3V39.354c0-1.656,1.343-3,3-3h58c1.657,0,3,1.344,3,3V49.979z" />
        </symbol>
        <symbol id="left" viewBox="0 0 64 64">
          <path
            d="M33.342,32.017c0,2.202,0.128,4.415,0.384,6.638c0.255,2.223,0.634,4.413,1.134,6.569c0.5,2.157,
            1.101,4.265,1.801,6.319  c0.7,2.056,1.506,4.019,2.418,5.888c0.288,0.533,0.455,1.005,0.5,1.416c0.044,0.412,0.006,
            0.773-0.116,1.084  c-0.123,0.313-0.301,0.579-0.534,0.8c-0.233,0.224-0.495,0.422-0.783,0.603L33.542,
            64c-1.623-2.489-3.013-5.024-4.169-7.604  c-1.156-2.58-2.101-5.198-2.835-7.854c-0.733-2.657-1.272-5.364-1.617-8.123c-0.346-2.756-0.517-5.556-0.517-8.403  c0-2.846,0.171-5.647,0.517-8.404c0.344-2.756,0.883-5.463,1.617-8.121c0.734-2.657,1.679-5.274,2.835-7.854  C30.529,5.059,31.919,2.513,33.542,0l4.603,2.668c0.288,0.178,0.55,0.378,0.783,0.6c0.233,0.223,0.411,0.49,0.534,0.8  c0.122,0.312,0.16,0.673,0.116,1.084c-0.045,0.412-0.212,0.884-0.5,1.417c-0.912,1.868-1.718,3.83-2.418,5.886  c-0.7,2.057-1.301,4.169-1.801,6.336c-0.5,2.168-0.879,4.364-1.134,6.587C33.47,27.604,33.342,29.816,33.342,
            32.017z"
          />
        </symbol>

        <symbol id="right" viewBox="0 0 64 64">
          <path d="M30.658,32.017c0-2.201-0.128-4.413-0.383-6.638c-0.256-2.222-0.634-4.417-1.134-6.585c-0.5-2.168-1.106-4.28-1.818-6.337  c-0.711-2.056-1.512-4.019-2.401-5.886c-0.289-0.534-0.456-1.006-0.5-1.417c-0.045-0.411-0.006-0.772,0.117-1.084  c0.122-0.311,0.3-0.578,0.534-0.8c0.233-0.222,0.494-0.422,0.784-0.6L30.458,0c3.224,5.025,5.553,10.195,6.987,15.508  c1.434,5.314,2.15,10.818,2.15,16.509c0,5.714-0.717,11.222-2.15,16.524C36.011,53.845,33.682,58.997,30.458,64l-4.602-2.668  c-0.29-0.179-0.551-0.378-0.784-0.601c-0.233-0.222-0.412-0.489-0.534-0.8c-0.123-0.313-0.162-0.674-0.117-1.085  c0.044-0.411,0.211-0.884,0.5-1.417c0.89-1.867,1.69-3.83,2.401-5.886c0.711-2.057,1.317-4.163,1.818-6.321  c0.5-2.155,0.878-4.346,1.134-6.569C30.53,36.431,30.658,34.218,30.658,32.017z" />
        </symbol>

        <symbol id="factorial" viewBox="0 0 64 64">
          <path d="M45.288,61.543H33.086c-0.901,0-1.632-0.218-2.19-0.655c-0.56-0.437-1.004-0.954-1.332-1.556L21.989,46.31  c-0.137,0.466-0.301,0.902-0.492,1.312c-0.191,0.41-0.396,0.792-0.614,1.146l-6.224,10.565c-0.383,0.546-0.833,1.052-1.352,1.516  c-0.519,0.464-1.187,0.695-2.006,0.695H0l14.25-21.947L0.574,19.08h12.202c0.901,0,1.563,0.117,1.985,0.349s0.799,0.621,1.127,1.167  l7.575,12.57c0.164-0.49,0.369-0.976,0.615-1.454c0.246-0.476,0.518-0.962,0.818-1.454l5.406-9.459  c0.382-0.6,0.784-1.037,1.208-1.31c0.423-0.273,0.949-0.41,1.577-0.41h11.629L31.038,39.022L45.288,61.543z" />
          <path d="M49.587,55.115c0-0.984,0.186-1.897,0.554-2.745c0.367-0.846,0.871-1.582,1.516-2.21c0.64-0.627,1.397-1.127,2.271-1.495  c0.874-0.368,1.828-0.552,2.867-0.552c1.008,0,1.952,0.184,2.825,0.552c0.874,0.368,1.638,0.868,2.294,1.495  c0.655,0.628,1.167,1.364,1.535,2.21C63.816,53.218,64,54.131,64,55.115c0,0.981-0.184,1.903-0.552,2.763  c-0.368,0.86-0.88,1.604-1.535,2.231c-0.656,0.628-1.42,1.12-2.294,1.474c-0.873,0.355-1.817,0.534-2.825,0.534  c-1.039,0-1.993-0.179-2.867-0.534c-0.873-0.354-1.631-0.846-2.271-1.474c-0.645-0.628-1.148-1.371-1.516-2.231  C49.772,57.019,49.587,56.097,49.587,55.115z M62.853,1.883v23.421c0,2.513-0.148,5.002-0.448,7.474  c-0.302,2.471-0.695,4.989-1.188,7.554h-8.602c-0.489-2.565-0.886-5.083-1.186-7.554c-0.302-2.471-0.449-4.96-0.449-7.474V1.883  H62.853z" />
        </symbol>
        <symbol id="minus" viewBox="0 0 64 64">
          <path d="M64,37.313c0,1.657-1.343,3-3,3H3c-1.657,0-3-1.343-3-3V26.688c0-1.657,1.343-3,3-3h58c1.657,0,3,1.343,3,3V37.313z" />
        </symbol>
        <symbol id="plus" viewBox="0 0 64 64">
          <path d="M64,37.313c0,1.657-1.343,3-3,3H3c-1.657,0-3-1.343-3-3V26.688c0-1.657,1.343-3,3-3h58c1.657,0,3,1.343,3,3V37.313z" />
          <path d="M37.313,64c1.657,0,3-1.343,3-3V3c0-1.657-1.343-3-3-3H26.688c-1.657,0-3,1.343-3,3v58c0,1.657,1.343,3,3,3H37.313z" />
        </symbol>
        <symbol id="multiply" viewBox="0 0 64 64">
          <path d="M62.368,9.597c1.384,1.344,1.415,3.552,0.072,4.935L15.435,62.94c-1.344,1.384-3.552,1.417-4.935,0.073l-8.868-8.611  c-1.383-1.343-1.416-3.551-0.072-4.935L48.565,1.059c1.343-1.383,3.553-1.415,4.936-0.072L62.368,9.597z" />
          <path d="M63.014,53.501c1.344-1.385,1.311-3.593-0.073-4.936L14.532,1.56c-1.383-1.343-3.591-1.312-4.935,0.073L0.986,10.5  c-1.343,1.383-1.311,3.592,0.072,4.936L49.468,62.44c1.384,1.343,3.592,1.311,4.935-0.072L63.014,53.501z" />
        </symbol>
        <symbol id="sqrt" viewBox="0 0 64 64">
          <path d="M55.025,0L34.483,64h-9.857l-8.54-23.479h-2.747c-0.577,0-1.13-0.081-1.656-0.244s-0.991-0.427-1.393-0.79  c-0.4-0.364-0.72-0.834-0.959-1.411c-0.238-0.576-0.356-1.279-0.356-2.107v-3.612H22.82c0.827,0,1.523,0.195,2.088,0.583  c0.565,0.39,0.947,0.873,1.147,1.449l2.183,8.691c0.426,1.204,0.766,2.427,1.016,3.668c0.251,1.242,0.451,2.503,0.603,3.782  c0.175-0.979,0.375-1.963,0.602-2.953c0.226-0.991,0.488-2.014,0.791-3.066L44.191,2.032c0.201-0.578,0.574-1.06,1.127-1.449  C45.869,0.194,46.525,0,47.275,0H55.025z" />
        </symbol>
        <symbol id="square" viewBox="0 0 64 64">
          <path d="M45.73,64H34.752c-0.715,0-1.295-0.173-1.738-0.52s-0.794-0.758-1.056-1.234l-9.484-16.564  c-0.174,0.478-0.369,0.887-0.584,1.234l-8.835,15.33c-0.304,0.434-0.661,0.834-1.072,1.201C11.572,63.816,11.041,64,10.391,64H0.127  L15.36,39.641L0.712,16.675H11.69c0.714,0,1.24,0.093,1.576,0.276c0.335,0.185,0.634,0.493,0.893,0.926l9.42,15.948  c0.108-0.28,0.232-0.552,0.374-0.812c0.14-0.262,0.297-0.531,0.471-0.813l8.25-14.161c0.305-0.477,0.622-0.823,0.958-1.04  c0.336-0.217,0.752-0.325,1.251-0.325h10.524L30.562,39.186L45.73,64z" />
          <path d="M61.84,23.86c0.667,0,1.193,0.183,1.58,0.55c0.387,0.366,0.58,0.85,0.58,1.45v3.6H43.521v-2c0-0.387,0.079-0.8,0.239-1.24  c0.16-0.439,0.44-0.84,0.84-1.2l8.4-8.46c0.721-0.72,1.347-1.406,1.881-2.06c0.533-0.653,0.973-1.297,1.319-1.93  c0.347-0.634,0.606-1.267,0.78-1.9c0.173-0.633,0.26-1.304,0.26-2.01c0-1.16-0.277-2.05-0.83-2.67  c-0.553-0.62-1.396-0.93-2.529-0.93c-0.92,0-1.697,0.243-2.33,0.73c-0.634,0.487-1.07,1.09-1.311,1.81  c-0.279,0.733-0.646,1.22-1.1,1.46c-0.453,0.24-1.1,0.293-1.94,0.16l-3.28-0.58c0.213-1.453,0.623-2.72,1.23-3.8  c0.606-1.08,1.359-1.98,2.26-2.7c0.9-0.72,1.93-1.257,3.09-1.61C51.66,0.177,52.906,0,54.24,0c1.439,0,2.736,0.21,3.891,0.63  c1.152,0.42,2.137,1.003,2.949,1.75c0.813,0.747,1.438,1.637,1.87,2.67C63.383,6.083,63.6,7.22,63.6,8.46  c0,1.066-0.149,2.054-0.449,2.96c-0.301,0.907-0.71,1.771-1.23,2.59c-0.52,0.82-1.123,1.613-1.81,2.38  c-0.687,0.768-1.417,1.544-2.19,2.33l-5.699,5.84c0.732-0.227,1.459-0.399,2.18-0.52c0.72-0.12,1.387-0.18,2-0.18H61.84z" />
        </symbol>
      </svg>
    </div>
  );
}

export default SvgCalcSprite;

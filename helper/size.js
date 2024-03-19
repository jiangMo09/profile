const general_width = 375

export const pxToVw = (pixel) => {
  const vw = (pixel / general_width) * 100
  return `${vw}vw`
}

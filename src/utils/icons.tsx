function importAll(r:any) {
    let images:any = {};
    r.keys().forEach((item:any) => {
        images[item.replace('./', '')] = r(item);
    });
    return images
}
export const WeatherIcons = importAll(require.context("../assets", false, /\.svg$/));



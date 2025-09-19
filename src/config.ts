export const Config = {
    MongoDB_URL: process.env.MONGO_URL || "",
    Port: parseInt(process.env.PORT || '3000', 10)
}
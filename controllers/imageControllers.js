const { translate } = require('bing-translate-api');



const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {

        try {

            const word = await translate(req.body.prompt, 'ku', 'en', true);

            console.log(word.translation);

            const response = await openai.createImage({
                prompt: word.translation,
                n: 1,
                size: "1024x1024"
            })
    
            console.log(req.body);
    
            const imageUrl = response.data.data[0].url;
    
            res.status(200).json({
                url: imageUrl,
            })
        } catch (error) {
            res.status(400).json({
                msg: 'asdfasd',
            })
        }
 

    

    
}

module.exports = {generateImage}
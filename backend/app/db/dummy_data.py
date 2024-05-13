from typing import List
from app.models.post import Post
from app.enums.tag import Tag

posts: List[Post] = [
    Post(
        post_id="53da2517-be04-49a0-a27d-6b5e4d26ecb6",
        title="The Rise of Women's Soccer: A Game-Changer",
        summary="Women's soccer has been gaining tremendous popularity and recognition worldwide, shattering"
                " traditional gender barriers and inspiring young girls to pursue their athletic dreams.",
        content="The world of soccer has witnessed a remarkable transformation in recent years, with women's soccer "
                "emerging as a force to be reckoned with. Once overshadowed by their male counterparts, female "
                "soccer players have proven their mettle, captivating audiences with their skill, determination, and"
                " unwavering spirit. From the record-breaking attendance at the 2019 FIFA Women's World Cup to the "
                "historic equal pay agreements reached by national teams, women's soccer has been breaking barriers and"
                " challenging societal norms. Iconic players like Megan Rapinoe, Alex Morgan, and Sam Kerr have become"
                "household names, inspiring young girls to dream big and pursue their passion for the beautiful game.",
        image_path="sport.jpg",
        tags=[Tag.sport],
    ),
    Post(
        post_id="bfac6384-f190-4488-92cc-7ca83a48e118",
        title="The Impact of Political Polarization on Democratic Discourse",
        summary="Political polarization has become a growing concern in many democracies, with citizens becoming "
                "increasingly divided along ideological lines.",
        content="In recent years, the phenomenon of political polarization has taken center stage in many democratic"
                "societies, posing a significant challenge to the fabric of civil discourse and governance. As citizens"
                "become increasingly divided along ideological lines, the gulf between opposing political camps widens,"
                "making it increasingly difficult to find common ground and engage in constructive dialogue."
                "The causes of political polarization are multifaceted, ranging from the rise of partisan media outlets"
                "and social media echo chambers to deeply rooted cultural and demographic shifts. Geographical sorting,"
                "where like-minded individuals cluster in specific regions, has further exacerbated the divide,creating"
                " ideological enclaves that reinforce existing beliefs and fuel animosity towards opposing viewpoints.",
        image_path="politics.avif",
        tags=[Tag.politics],
    ),
    Post(
        post_id="bfac6384-f190-4488-92cc-7ca83a48e112",
        title="The Transformative Power of Artificial Intelligence",
        summary="Artificial Intelligence (AI) has emerged as a transformative technology, reshaping industries and "
                "revolutionizing the way we live and work.",
        content="In the rapidly evolving digital landscape,Artificial Intelligence (AI) has emerged as a transformative"
                "force, reshaping industries and revolutionizing the way we live and work. From healthcare and "
                "transportation to finance and entertainment,the applications of AI are vast and far-reaching, offering"
                " unprecedented opportunities for innovation and efficiency."
                "At the core of AI's potential lies its ability to process and analyze vast amounts of data, identify "
                "patterns, and make informed decisions at a scale and speed that surpasses human capabilities. In"
                "healthcare, AI-powered diagnostic tools are helping doctors detect diseases earlier and more"
                "accurately, potentially saving countless lives. Meanwhile, in the transportation sector, self-driving"
                "vehicles powered by AI are poised to revolutionize mobility, reducing traffic congestion and increasing road safety.",
        image_path="ai.avif",
        tags=[Tag.internet_technologies],
    )
]

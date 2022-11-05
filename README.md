# HNG Internship Project 2022
It's a yearly free internship to develop developers or individuals who are interested in tech, to become a world class.

#### Stage 1🚀:
- Create an **(GET)** api endoint that returns the following  json response:
     { "**slackUsername**": String, "**backend**": Boolean, "**age**": Integer, "**bio**": String }

#### Stage 2🚀:
- Create a **(POST)** api endoint that takes the following sample json:
     { "**operation_type**": Enum< addition | subtraction | multiplication>, "**x**": Number and Integer, "**y**": Number and Integer}
     and returns the following  json response:
     { "**slackUsername**": String, "**operation_type**": Enum< addition | subtraction | multiplication>, "**result**": Integer}

     - **Bonus_section**:
     We will send in a random string to the **"operation_type"** field . This string will be an operation written in words, for example __“Can you please add the following numbers together - 13 and 25.”__

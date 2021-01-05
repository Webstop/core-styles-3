FROM klakegg/hugo:0.80.0-ext-alpine
WORKDIR /src
COPY package.json package-lock.json ./
COPY . /src
RUN npm install -g sass
RUN npm install

RUN node --version
RUN npm  --version
RUN yarn --version
RUN sass --version

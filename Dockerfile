# Etapa 0: Variables de entorno de secretos
ARG UTIL_URL
ARG USER_URL
ARG AUTH_URL
ARG POST_NOTI_UTL
ARG DATABASE_URL
# Etapa 1: Instalación de dependencias
FROM node:lts as dependencies
WORKDIR /twitter-frontend

COPY package.json yarn.lock ./

ENV UTIL_URL=$UTIL_URL
ENV USER_URL=$USER_URL
ENV AUTH_URL=$AUTH_URL
ENV POST_NOTI_UTL=$POST_NOTI_UTL
ENV DATABASE_URL=$DATABASE_URL

RUN yarn install --frozen-lockfile

# Etapa 2: Reconstrucción del código fuente
FROM node:lts as builder
WORKDIR /twitter-frontend
COPY . .
COPY --from=dependencies /twitter-frontend/node_modules ./node_modules
RUN yarn build


# Etapa 3: Imagen de Producción
FROM node:lts as runner
WORKDIR /twitter-frontend
ENV NODE_ENV production

# Copia del archivo next.config.js (personalizado)
COPY --from=builder /twitter-frontend/next.config.js ./

# Copia de otros archivos necesarios
COPY --from=builder /twitter-frontend/public ./public
COPY --from=builder /twitter-frontend/.next ./.next
COPY --from=builder /twitter-frontend/node_modules ./node_modules
COPY --from=builder /twitter-frontend/package.json ./package.json


# Exponer el puerto 3003
EXPOSE 3003
CMD ["yarn", "start"]

FROM ghcr.io/cloudpunks/alpine:3.24@sha256:dac428a9b6d3aa41809f34a428ee8550a4f2ba99d82c75e9689d4cf055fc2e78
ENTRYPOINT [""]

# renovate: datasource=npm depName=@commitlint/cli
ENV COMMITLINT_CLI_VERSION=21.2.2

# renovate: datasource=npm depName=@commitlint/config-conventional
ENV COMMITLINT_CONFIG_VERSION=21.2.2

RUN apk update && \
  apk upgrade && \
  apk add nodejs npm git && \
  npm install --global \
    @commitlint/cli@${COMMITLINT_CLI_VERSION} \
    @commitlint/config-conventional@${COMMITLINT_CONFIG_VERSION} && \
  rm -rf /var/cache/apk/*

COPY ./overlay /

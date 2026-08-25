FROM ghcr.io/cloudpunks/alpine:3.24@sha256:c05a9a0ce1b3d9e2f216b0024f499a562977cfa67174c20e9f9a19dee301ad04
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

FROM ghcr.io/cloudpunks/alpine:3.24@sha256:f735e3f0ae5b8ab423c6467079a33c38e2700eab720cc676f5a330b44eb9d05d
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

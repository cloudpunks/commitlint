FROM ghcr.io/cloudpunks/alpine:3.19@sha256:1137281fed3287438ce085bb5abde5b05f20b303d6b16e5ae62ea3bbe5737ff2
ENTRYPOINT [""]

# renovate: datasource=npm depName=@commitlint/cli
ENV COMMITLINT_CLI_VERSION=18.4.3

# renovate: datasource=npm depName=@commitlint/config-conventional
ENV COMMITLINT_CONFIG_VERSION=18.4.3

RUN apk update && \
  apk upgrade && \
  apk add nodejs npm git && \
  npm install --global \
    @commitlint/cli@${COMMITLINT_CLI_VERSION} \
    @commitlint/config-conventional@${COMMITLINT_CONFIG_VERSION} && \
  rm -rf /var/cache/apk/*

COPY ./overlay /

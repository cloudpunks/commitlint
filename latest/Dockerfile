FROM ghcr.io/cloudpunks/alpine:3.19@sha256:6aadf3a197fcbd87a3d1cf01e5bb3773e4e5343ec5ca0a09ea84b69ea800791e
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
